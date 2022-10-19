import React, { FC } from "react";

// initial step to set up a project, this data will be used to build the ProjectCard
// form will be presented when opening 'builders' from menu
const CardForm: FC = () => {
    return (
        <div className="w-[900px] h-[200px] flex justify-center place-items-center mb-10 ml-[15%] bg-brand-green text-brand-darkest">
            <div>This form will take the initial info to build the project Card.</div>
        </div>
    )
}

export default CardForm