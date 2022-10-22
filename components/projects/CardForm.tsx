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
    active: true,
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
    <div className="mt-[18%] px-10 rounded-lg bg-brand-darker opacity-[90%] text-brand-orange text-xl">
      <form className="flex flex-col" onSubmit={createProject}>
        <div className="">
          <label className="pr-5">Project Name</label>
          <input
            className="mb-3 bg-brand-teal opacity-[80%]"
            value={formInput.name}
            required
            onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
          ></input>
        </div>

        <div>
          <label className="pr-5">Description</label>
          <input
            className="mb-3 bg-brand-teal opacity-[80%]"
            value={formInput.description}
            required
            onChange={(e) =>
              setFormInput({ ...formInput, description: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label className="pr-5 text-center">Github Organization</label>
          <input
            className="mb-3 bg-brand-teal opacity-[80%] text-center"
            value={formInput.organization}
            required
            onChange={(e) =>
              setFormInput({ ...formInput, organization: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label className="pr-5 text-center">Github Repository Name</label>
          <input
            className="mb-6 bg-brand-teal opacity-[80%] text-center"
            value={formInput.repository}
            required
            onChange={(e) =>
              setFormInput({ ...formInput, repository: e.target.value })
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
          verification message appears here
        </div>

        <hr className="border-1 border-brand-orange"></hr>
        <hr className="border-1 border-brand-orange mb-6"></hr>

        <div className="">
          <label className="pr-5 text-center">Network</label>
          <input
            className="mb-3 bg-brand-teal opacity-[80%] text-center"
            value={formInput.network}
            required
            onChange={(e) =>
              setFormInput({ ...formInput, network: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label className="pr-5 text-center">Category 1</label>
          <input
            className="mb-3 bg-brand-teal opacity-[80%] text-center"
            value={formInput.category1}
            required
            onChange={(e) =>
              setFormInput({ ...formInput, category1: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label className="pr-5 text-center">Category 2</label>
          <input
            className="mb-3 bg-brand-teal opacity-[80%] text-center"
            value={formInput.category2}
            required
            onChange={(e) =>
              setFormInput({ ...formInput, category2: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label className="pr-5 text-center">Upload Image</label>
          <input
            className="mb-6 text-center"
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
  );
};

export default CardForm;
