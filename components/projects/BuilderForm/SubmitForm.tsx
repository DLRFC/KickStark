import React, { FC, SyntheticEvent, useState } from "react"
import { supabase } from "../../../utils/supabase"

type Props = {
    nextStep: Function
    previousStep: Function
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
    phaseSummaries: string[]
    phaseDescriptions: string[][]
}

const SubmitForm: FC<Props> = ({ nextStep, previousStep, values, phaseSummaries, phaseDescriptions }) => {
    function previousPage(e: SyntheticEvent) {
        e.preventDefault()
        previousStep()
    }

    async function createProject(e: SyntheticEvent<EventTarget>) {
        e.preventDefault()

        const fullForm = {
            name: values.name,
            description: values.description,
            loginType: values.loginType,
            login: values.login,
            repository: values.repository,
            network: values.network,
            category1: values.category1,
            category2: values.category2,
            phaseSummaries: phaseSummaries,
            phaseDescriptions: phaseDescriptions
        }

        try {
            await supabase.from("projects").insert([fullForm]).single()
        } catch (error) {
            console.log("Error: ", error)
        }
        nextStep()
    }

    return (
        <div className="mt-[25%] px-10 pb-5 rounded-lg bg-brand-darker text-brand-orange text-xl">
            You are about to submit the project form. Please make sure
            everything is correct.
            <button
                onClick={(e) => createProject(e)}
                className="py-2 rounded-lg bg-brand-green text-md text-brand-darkest"
            >
                Submit Form
            </button>
            <button
                onClick={previousPage}
                className="py-2 rounded-lg bg-brand-green text-md text-brand-darkest"
            >
                Back
            </button>
        </div>
    )
}

export default SubmitForm
