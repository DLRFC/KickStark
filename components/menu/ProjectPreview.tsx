import React, { FC } from "react";


// this will display a sample project incl. card, roadmap and
// status inside the 'Deliverable' heading of front page menu
const ProjectPreview: FC = () => {
    return (
        <div className="w-[900px] h-[200px] flex justify-center place-items-center mb-10 ml-[15%] bg-brand-green text-brand-darkest">
            <div>This will display a sample project Card, Roadmap, and Progress Report.</div>
        </div>
    )
}

export default ProjectPreview