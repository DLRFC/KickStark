import React, { FC } from "react";

// this will display a sample investor's dashboard inside
// the 'investors' heading of front page menu
const InvestorPreview: FC = () => {
    return (
        <div className="w-[900px] h-[200px] flex justify-center place-items-center mb-10 ml-[15%] bg-brand-green text-brand-darkest">
            <div>This will display a sample dashboard with multiple project cards and their progress reports.</div>
        </div>
    )
}

export default InvestorPreview