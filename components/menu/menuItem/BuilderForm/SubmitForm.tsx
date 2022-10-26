import React, { FC, SyntheticEvent, useState } from "react"
import { supabase } from "../../../../utils/supabase"

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

const SubmitForm: FC<Props> = ({
    nextStep,
    previousStep,
    values,
    phaseSummaries,
    phaseDescriptions
}) => {
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
        <div className="flex flex-col items-center">
            <p>
                You are about to submit the project form. Please make sure
                everything is correct.
            </p>
            <div className="mt-4 flex flex-row gap-3">
            <button
                onClick={previousPage}
                className="w-[120px] p-2 rounded-lg bg-brand-green text-md text-brand-darkest"
            >
                Go Back
            </button>
            <button
                onClick={(e) => createProject(e)}
                className="w-[120px] p-2 rounded-lg bg-brand-green text-md text-brand-darkest"
            >
                Submit
            </button>
            </div>
        </div>
    )
}

export default SubmitForm
