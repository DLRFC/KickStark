import React, { FC, SyntheticEvent } from "react"

type Props = {
    nextStep: Function
    previousStep: Function
    phase: number
    phaseSummaries: string[]
    phaseDescriptions: string[][]
    updatePhaseSummaries: Function
    updatePhaseDescriptions: Function
}

const RoadmapForm: FC<Props> = ({
    nextStep,
    previousStep,
    phase,
    phaseSummaries,
    phaseDescriptions,
    updatePhaseSummaries,
    updatePhaseDescriptions
}) => {
    function nextPage(e: SyntheticEvent) {
        e.preventDefault()
        nextStep()
    }

    function previousPage(e: SyntheticEvent) {
        e.preventDefault()
        previousStep()
    }
    return (
        <div className="flex flex-col">
            <h1 className="text-center mb-3">Roadmap Phase {phase}/5</h1>
            <label className="pr-5">Summary</label>
            <textarea
                className="pl-1 mb-3 h-[80px] bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                value={phaseSummaries[phase - 1]}
                required
                onChange={(e) => updatePhaseSummaries(phase - 1, e)}
            ></textarea>
            <label className="pr-5">Item 1</label>
            <textarea
                className="pl-1 mb-3 h-[80px] bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                value={phaseDescriptions[phase - 1][0]}
                required
                onChange={(e) => updatePhaseDescriptions(phase - 1, 0, e)}
            ></textarea>
            <label className="pr-5">Item 2</label>
            <textarea
                className="pl-1 mb-3 h-[80px] bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                value={phaseDescriptions[phase - 1][1]}
                required
                onChange={(e) => updatePhaseDescriptions(phase - 1, 1, e)}
            ></textarea>
            <label className="pr-5">Item 3</label>
            <textarea
                className="pl-1 mb-3 h-[80px] bg-brand-teal opacity-[80%] text-brand-gray text-lg"
                value={phaseDescriptions[phase - 1][2]}
                required
                onChange={(e) => updatePhaseDescriptions(phase - 1, 2, e)}
            ></textarea>
            <div className="my-2 flex flex-row justify-between">
            <button
                onClick={previousPage}
                className="w-[120px] p-2 rounded-lg bg-brand-green text-md text-brand-darkest"
            >
                Back
            </button>
            <button
                onClick={nextPage}
                className="w-[120px] p-2 rounded-lg bg-brand-green text-md text-brand-darkest"
            >
                Continue
            </button>
            </div>
        </div>
    )
}

export default RoadmapForm
