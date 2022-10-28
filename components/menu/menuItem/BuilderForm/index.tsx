import React, { FC, useState } from "react"
import CardForm from "./CardForm"
import RoadmapForm from "./RoadmapForm"
import SubmitForm from "./SubmitForm"
import Success from "./Success"

type Props = {
    userAddress: string | null
}

const BuilderForm: FC<Props> = ({userAddress}) => {
    const [cardFormInput, setCardFormInput] = useState({
        name: "",
        description: "",
        loginType: "organization",
        login: "",
        repository: "",
        twitter: "",
        network: "",
        category1: "DAO",
        category2: "Privacy"
    })
    const [phaseSummaries, setPhaseSummaries] = useState(["", "", "", "", ""])
    const [phaseDescriptions, setPhaseDescriptions] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])

    const [step, setStep] = useState(1)

    function nextStep() {
        setStep(step + 1)
    }

    function previousStep() {
        setStep(step - 1)
    }

    function updateCardForm(field: string, e: any) {
        setCardFormInput({ ...cardFormInput, [field]: e.target.value })
    }

    function updatePhaseSummaries(index: number, e: any) {
        const updatedArray = [...phaseSummaries]
        updatedArray[index] = e.target.value
        setPhaseSummaries(updatedArray)
    }

    function updatePhaseDescriptions(
        phaseIndex: number,
        itemIndex: number,
        e: any
    ) {
        const updatedArray = [...phaseDescriptions]
        updatedArray[phaseIndex][itemIndex] = e.target.value
        setPhaseDescriptions(updatedArray)
    }

    function renderFormComponent() {
        switch (step) {
            case 1:
                return (
                    <CardForm
                        nextStep={nextStep}
                        updateCardForm={updateCardForm}
                        values={cardFormInput}
                    />
                )
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return (
                    <RoadmapForm
                        phase={step - 1}
                        nextStep={nextStep}
                        previousStep={previousStep}
                        updatePhaseSummaries={updatePhaseSummaries}
                        updatePhaseDescriptions={updatePhaseDescriptions}
                        phaseSummaries={phaseSummaries}
                        phaseDescriptions={phaseDescriptions}
                    />
                )
            case 7:
                return (
                    <SubmitForm
                        nextStep={nextStep}
                        previousStep={previousStep}
                        values={cardFormInput}
                        phaseSummaries={phaseSummaries}
                        phaseDescriptions={phaseDescriptions}
                        userAddress={userAddress}
                    />
                )
            case 8:
                return <Success />
        }
    }
    return (
        <div className="mt-[35%] p-5 rounded-lg bg-brand-darker text-brand-orange text-xl w-[650px] minH-[600px]">
            {renderFormComponent()}
        </div>
    )
}

export default BuilderForm
