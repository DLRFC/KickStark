import React, { FC, SyntheticEvent, useState } from "react";
import axios from "axios";
import { supabase } from "../../utils/supabase";
import { web3storage } from "../../utils/web3storage";

const CardForm: FC = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    organization: "",
    repository: "",
    network: "",
    category1: "",
    category2: "",
    image: "",
    active: true
  });
  const [isVerified, setIsVerified] = useState();
  const [message, setMessage] = useState("");

  async function addFile(event: SyntheticEvent<HTMLInputElement>) {
    const file = event.currentTarget.files;

    if (file) {
      const cid = await web3storage.put(file);
      setFormInput({ ...formInput, image: "ipfs://" + cid });
    }
  }

  async function createProject(event: SyntheticEvent<EventTarget>) {
    event.preventDefault();

    try {
      await supabase.from("projects").insert([formInput]).single();
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function verifyGithub() {
    const response = await axios.post("/api/verify-github", {
      organization: formInput.organization,
      repository: formInput.repository,
    });
    const { isVerified, message } = response.data;
    setIsVerified(isVerified);
    setMessage(message);
  }

  return (
    <div className="w-[900px] h-[100%] flex flex-col justify-center place-items-center mb-10 ml-[15%] bg-brand-green text-brand-darkest py-5">
      <form className="flex flex-col justify-center" onSubmit={createProject}>
        <label className="text-center">Project Name</label>
        <input
          className="mb-3 text-center"
          value={formInput.name}
          required
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
        ></input>
        <label className="text-center">Description</label>
        <input
          className="mb-3 text-center"
          value={formInput.description}
          required
          onChange={(e) =>
            setFormInput({ ...formInput, description: e.target.value })
          }
        ></input>
        <label className="text-center">Github Organization</label>
        <input
          className="mb-3 text-center"
          value={formInput.organization}
          required
          onChange={(e) =>
            setFormInput({ ...formInput, organization: e.target.value })
          }
        ></input>
        <label className="text-center">Github Repository Name</label>
        <input
          className="mb-3 text-center"
          value={formInput.repository}
          required
          onChange={(e) =>
            setFormInput({ ...formInput, repository: e.target.value })
          }
        ></input>
        <button
          type="button"
          className="bg-black text-white"
          onClick={verifyGithub}
        >
          Verify Github
        </button>
        {message}
        <label className="text-center">Network</label>
        <input
          className="mb-3 text-center"
          value={formInput.network}
          required
          onChange={(e) =>
            setFormInput({ ...formInput, network: e.target.value })
          }
        ></input>
        <label className="text-center">Category 1</label>
        <input
          className="mb-3 text-center"
          value={formInput.category1}
          required
          onChange={(e) =>
            setFormInput({ ...formInput, category1: e.target.value })
          }
        ></input>
        <label className="text-center">Category 2</label>
        <input
          className="mb-3 text-center"
          value={formInput.category2}
          required
          onChange={(e) =>
            setFormInput({ ...formInput, category2: e.target.value })
          }
        ></input>
        <label className="text-center">Upload Image</label>
        <input
          className="mb-3 text-center"
          type="file"
          required
          onChange={addFile}
        ></input>
        <button
          type="submit"
          className="bg-black text-white"
          disabled={!isVerified}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardForm;