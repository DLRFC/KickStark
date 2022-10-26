import { IStarknetWindowObject } from "get-starknet"
import { FC, Context, Dispatch, SetStateAction, createContext, useState, useEffect } from "react"
import { connect, getStarknet } from "get-starknet"

type Props = {
    children: React.ReactNode
}

type AppContext = {
    userAddress: string | null
    setAppContext: Dispatch<SetStateAction<AppContext>>
}

const initialAppContext: AppContext = {
    userAddress: null,
    setAppContext: (): void => {
        throw new Error("setAppContext function must be overridden")
    }
}

const AppContext = createContext<AppContext>(initialAppContext)

const AppContextProvider = ({ children }: Props): JSX.Element => {
    const [appContext, setAppContext] = useState<AppContext>(initialAppContext)

    useEffect(() => {
        // Get context from session storage and save to state
        const rawSavedContext = sessionStorage.getItem("appContext")
        const savedContext = rawSavedContext ? JSON.parse(rawSavedContext) : null
        if (savedContext) {
            setAppContext(savedContext)
        }

        // Silently attempt to connect with a pre-authorized wallet
        connect({ showList: false }).then((wallet) => {
            // Connect the app with the chosen wallet instance
            wallet?.enable({ showModal: false }).then(() => {
                let updatedAppContext: AppContext = {
                    userAddress: null,
                    setAppContext: setAppContext
                }
                updatedAppContext.userAddress = !!wallet?.isConnected ? wallet.account.address : null
                setAppContext(updatedAppContext)
                // console.log("One-time useEffect called. updatedAppContext.userAddress:", updatedAppContext.userAddress)
            })
        })
    }, [])

    useEffect(() => {
        const wallet = getStarknet()
        if (!wallet.isConnected && appContext.userAddress !== null) {
            setAppContext({
                userAddress: null,
                setAppContext: setAppContext
            })
        } else if (wallet.isConnected && appContext.userAddress === null) {
            setAppContext({
                userAddress: wallet.account.address,
                setAppContext: setAppContext
            })
        }
        // console.log(`Non-dependent useEffect called. appContext.userAddress: ${appContext.userAddress}`)
    })

    useEffect(() => {
        sessionStorage.setItem("appContext", JSON.stringify(appContext))
    }, [appContext])

    return <AppContext.Provider value={{ ...appContext, setAppContext }}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }
