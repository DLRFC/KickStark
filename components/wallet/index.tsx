import { FC, useState, useContext } from "react"
import { connect, getStarknet } from "get-starknet"
import { Abi, Contract, Signature } from "starknet"
import { AppContext } from "../context/AppContext"

import kickStarkAbi from "../../abis/kickStarkAbi.json"
import { kickStarkAddr, validatorAddr } from "../../config/goerli-alpha"

const Wallet: FC = () => {
    const { userAddress, setAppContext } = useContext(AppContext)

    console.log("USERADDRESS", userAddress)

    const connectWallet = async () => {
        console.log("connecting...")
        try {
            const wallet = await connect({
                showList: true,
                include: ["braavos", "argentx"]
            })
            if (wallet) {
                await wallet.enable({ showModal: true })
                console.log("wallet", wallet)
                console.log("wallet.account.address", wallet.account.address)
                setAppContext({ userAddress: wallet.account.address, setAppContext: setAppContext })
            }
        } catch (err) {
            console.error(err)
        }
    }

    const startProject = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            return kickStarkContract.start_project(validatorAddr)
        }
    }

    const contribute = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            // kickStarkContract.start_project(validatorAddr)
            return kickStarkContract.contribute(1)
        }
    }

    const stagePercentages = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(kickStarkAbi as Abi, kickStarkAddr, wallet.account)
            return kickStarkContract.stagePercentages(0)
        }
    }

    return (
        <>
            {/*  {userAddress !== null && (
                <>
                    <button
                        onClick={async () => alert(await stagePercentages())}
                        className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                    >
                        stagePercentages(0)
                    </button>
                    <button
                        onClick={startProject}
                        className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                    >
                        start_project()
                    </button>
                    <button
                        onClick={contribute}
                        className="my-3 bg-brand-orange text-brand-darkest rounded-lg py-2 px-4"
                    >
                        contribute(1)
                    </button>
                </>
            )} */}
            <button
                onClick={connectWallet}
                className="bg-brand-orange text-brand-dark text-md rounded-md px-4 py-2 truncate w-48 h-11"
            >
                {userAddress !== null ? userAddress : "connect wallet"}
            </button>
        </>
    )
}

export default Wallet
