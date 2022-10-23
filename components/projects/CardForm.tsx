import React, { FC, SyntheticEvent, useState } from "react"
import axios from "axios"
import { supabase } from "../../utils/supabase"
import { web3storage } from "../../utils/web3storage"

const CardForm: FC = () => {
    const [formInput, setFormInput] = useState({
        name: "",
        description: "",
        loginType: "organization",
        login: "",
        repository: "",
        network: "",
        category1: "DAO",
        category2: "Privacy",
        image: "",
        active: true
    })
    const [isVerified, setIsVerified] = useState()
    const [message, setMessage] = useState("Verification message appears here")

    async function addFile(event: SyntheticEvent<HTMLInputElement>) {
        const file = event.currentTarget.files

        if (file) {
            const cid = await web3storage.put(file)
            setFormInput({ ...formInput, image: "ipfs://" + cid })
        }
    }

    async function createProject(event: SyntheticEvent<EventTarget>) {
        event.preventDefault()

        try {
            await supabase.from("projects").insert([formInput]).single()
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    async function verifyGithub() {
        const response = await axios.post("/api/verify-github", {
            login: formInput.login,
            loginType: formInput.loginType,
            repository: formInput.repository
        })
        const { isVerified, message } = response.data
        setIsVerified(isVerified)
        setMessage(message)
    }

    return (
        <div className="mt-[25%] px-10 rounded-lg bg-brand-darker text-brand-orange text-xl">
            <form className="flex flex-col" onSubmit={createProject}>
                <div className="">
                    <label className="pr-5">Project Name</label>
                    <input
                        className="pl-1 mb-3 bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                        value={formInput.name}
                        required
                        onChange={(e) =>
                            setFormInput({ ...formInput, name: e.target.value })
                        }
                    ></input>
                </div>

                <label className="pr-5">Description</label>
                <textarea
                    className="pl-1 mb-3 h-[80px] bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                    value={formInput.description}
                    required
                    onChange={(e) =>
                        setFormInput({
                            ...formInput,
                            description: e.target.value
                        })
                    }
                ></textarea>

                <div>
                    <label className="pr-8">Github Type</label>
                    <input
                        className="mb-5 mr-2"
                        type="radio"
                        value="organization"
                        checked={formInput.loginType === "organization"}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                loginType: e.target.value
                            })
                        }
                    ></input>
                    <label className="text-sm text-brand-green">
                        Organization
                    </label>
                    <input
                        className="mb-5 ml-5 mr-2"
                        type="radio"
                        value="user"
                        checked={formInput.loginType === "user"}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                loginType: e.target.value
                            })
                        }
                    ></input>
                    <label className="text-sm text-brand-green">
                        User
                    </label>
                </div>

                <div>
                    <label className="pr-5 text-center">
                        Github Org or User Name
                    </label>
                    <input
                        className="pl-1 mb-3 bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                        value={formInput.login}
                        required
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                login: e.target.value
                            })
                        }
                    ></input>
                </div>

                <div>
                    <label className="pr-5 text-center">
                        Github Repository Name
                    </label>
                    <input
                        className="pl-1 mb-6 bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                        value={formInput.repository}
                        required
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                repository: e.target.value
                            })
                        }
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
                        value={formInput.network}
                        required
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                network: e.target.value
                            })
                        }
                    ></input>
                </div>

                <div>
                    <label className="pr-5 text-center">Category 1</label>
                    <select
                        id="cat1"
                        name="cat1"
                        className="mb-3 bg-brand-teal opacity-[80%] text-center text-brand-gray text-lg"
                        value={formInput.category1}
                        required
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                category1: e.target.value
                            })
                        }
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
                        className="mb-3 bg-brand-teal opacity-[80%] text-center text-brand-gray text-lg"
                        value={formInput.category2}
                        required
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                category2: e.target.value
                            })
                        }
                    >
                        <option value="dao">DAO</option>
                        <option value="defi">DeFi</option>
                        <option value="devtools">DevTools</option>
                        <option value="nft">NFT</option>
                        <option value="privacy">Privacy</option>
                        <option value="social">Social</option>
                    </select>
                </div>
                <div>
                    <label className="pr-5 text-center">Upload Image</label>
                    <input
                        className="mb-6 text-center text-sm"
                        type="file"
                        required
                        onChange={addFile}
                    ></input>
                </div>

                <button
                    type="submit"
                    className="py-2 rounded-lg bg-brand-green text-md text-brand-darkest"
                    disabled={!isVerified}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CardForm
