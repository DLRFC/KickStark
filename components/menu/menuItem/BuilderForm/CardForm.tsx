import React, { FC, SyntheticEvent, useState } from "react"
import axios from "axios"

type Props = {
    nextStep: Function
    updateCardForm: Function
    values: {
        name: string
        description: string
        loginType: string
        login: string
        repository: string
        network: string
        category1: string
        category2: string
    }
}

const CardForm: FC<Props> = ({ nextStep, updateCardForm, values }) => {
    const [isVerified, setIsVerified] = useState()
    const [message, setMessage] = useState("Verification message appears here")

    function nextPage(e: SyntheticEvent) {
        e.preventDefault()
        nextStep()
    }

    async function verifyGithub() {
        const response = await axios.post("/api/verify-github", {
            login: values.login,
            loginType: values.loginType,
            repository: values.repository
        })
        const { isVerified, message } = response.data
        setIsVerified(isVerified)
        setMessage(message)
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-center mb-2">General Information</h1>
            <label className="pr-5">Project Name</label>
            <input
                className="pl-1 mb-3 bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                value={values.name}
                required
                onChange={(e) => updateCardForm("name", e)}
            ></input>
            <label className="pr-5">Description</label>
            <textarea
                className="pl-1 mb-3 h-[80px] bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                value={values.description}
                required
                onChange={(e) => updateCardForm("description", e)}
            ></textarea>

            <div>
                <label className="pr-8">Github Type</label>
                <input
                    className="mb-5 mr-2"
                    type="radio"
                    value="organization"
                    checked={values.loginType === "organization"}
                    onChange={(e) => updateCardForm("loginType", e)}
                ></input>
                <label className="text-sm text-brand-green">Organization</label>
                <input
                    className="mb-5 ml-5 mr-2"
                    type="radio"
                    value="user"
                    checked={values.loginType === "user"}
                    onChange={(e) => updateCardForm("loginType", e)}
                ></input>
                <label className="text-sm text-brand-green">User</label>
            </div>

            <div>
                <label className="pr-5 text-center">
                    Github Org or User Name
                </label>
                <input
                    className="pl-1 mb-3 bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                    value={values.login}
                    required
                    onChange={(e) => updateCardForm("login", e)}
                ></input>
            </div>

            <div>
                <label className="pr-5 text-center">
                    Github Repository Name
                </label>
                <input
                    className="pl-1 mb-6 bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                    value={values.repository}
                    required
                    onChange={(e) => updateCardForm("repository", e)}
                ></input>
            </div>

            <button
                type="button"
                className="mb-2 py-2 rounded-lg bg-brand-green text-md text-brand-darkest"
                onClick={verifyGithub}
            >
                Verify Github
            </button>

            <div className="text-brand-green text-sm text-center pb-4">
                {message}
            </div>

            <hr className="border-1 border-brand-orange"></hr>
            <hr className="border-1 border-brand-orange mb-6"></hr>

            <div className="">
                <label className="pr-5 text-center">Network</label>
                <input
                    className="pl-1 mb-3 bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                    value={values.network}
                    required
                    onChange={(e) => updateCardForm("network", e)}
                ></input>
            </div>

            <div>
                <label className="pr-5 text-center">Category 1</label>
                <select
                    id="cat1"
                    name="cat1"
                    className="mb-3 bg-brand-teal opacity-[80%] text-center text-brand-gray text-lg"
                    value={values.category1}
                    required
                    onChange={(e) => updateCardForm("category1", e)}
                >
                    <option value="dao">DAO</option>
                    <option value="defi">DeFi</option>
                    <option value="devtools">DevTools</option>
                    <option value="nft">NFT</option>
                    <option value="privacy">Privacy</option>
                    <option value="social">Social</option>
                </select>

                <label className="pl-8 pr-5 text-center">Category 2</label>
                <select
                    id="cat2"
                    name="cat2"
                    className="mb-6 bg-brand-teal opacity-[80%] text-center text-brand-gray text-lg"
                    value={values.category2}
                    required
                    onChange={(e) => updateCardForm("category2", e)}
                >
                    <option value="dao">DAO</option>
                    <option value="defi">DeFi</option>
                    <option value="devtools">DevTools</option>
                    <option value="nft">NFT</option>
                    <option value="privacy">Privacy</option>
                    <option value="social">Social</option>
                </select>
            </div>
            {/* <div className="my-2 flex flex-row justify-end"> */}
            <button
                onClick={nextPage}
                className="py-2 rounded-lg bg-brand-green text-md text-brand-darkest"
                disabled={!isVerified}
            >
                Continue
            </button>
            {/* </div> */}
        </div>
    )
}

export default CardForm
