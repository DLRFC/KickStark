import React, { FC } from "react";


// this will display a sample project incl. card, roadmap and
// status inside the 'Deliverable' heading of front page menu
const ProjectPreview: FC = () => {
    return (
        <div className="flex item-center ml-[10%]">
            <div className="h-[300px] w-[200px] mx-4 bg-brand-gray opacity-[90%] rounded-lg">Sample Card</div>
            <div className="h-[300px] w-[400px] mx-4 bg-brand-gray opacity-[90%] rounded-lg">Sample Roadmap</div>
            <div className="h-[300px] w-[275px] mx-4 bg-brand-gray opacity-[90%] rounded-lg">Sample Progess</div>
        </div>
    )
}

export default ProjectPreview