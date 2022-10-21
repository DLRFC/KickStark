import { FC, useState } from "react"
import { connect, getStarknet } from "get-starknet"
import { Abi, Contract, Signature } from "starknet"

import kickStarkAbi from "../../abis/kickStarkAbi.json"

const Wallet: FC = () => {
    const [isConnected, setIsConnected] = useState<boolean>(false)
    const [userAddress, setUserAddress] = useState<any>()

    const network = "goerli-alpha"
    const contractAddress =
        "0x004992699a49a8ef380462c60228a9cebbcd5a4dcb9bcc58bc8d5981296ec8c5"
    const validatorAddr =
        "0x06dbdcf5d22ac87eb14d994a47e38aa5aa2eee2c6e3c0e391f04e14b8106473b"

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
                setIsConnected(!!wallet?.isConnected)
                setUserAddress(wallet.account.address)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const startProject = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(
                kickStarkAbi as Abi,
                contractAddress,
                wallet.account
            )
            return kickStarkContract.start_project(validatorAddr)
        }
    }

    const contribute = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(
                kickStarkAbi as Abi,
                contractAddress,
                wallet.account
            )
            // kickStarkContract.start_project(validatorAddr)
            return kickStarkContract.contribute(1)
        }
    }

    const stagePercentages = async () => {
        const wallet = getStarknet()
        if (wallet.isConnected) {
            const kickStarkContract = new Contract(
                kickStarkAbi as Abi,
                contractAddress,
                wallet.account
            )
            return kickStarkContract.stagePercentages(0)
        }
    }

    return (
        <>
            {isConnected && (
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
            )}
            <button
                onClick={connectWallet}
                className="bg-brand-orange text-brand-dark text-md rounded-md px-4 py-2 truncate w-48 h-11"
            >
                {isConnected ? userAddress : "connect wallet"}
            </button>
        </>
    )
}

export default Wallet
