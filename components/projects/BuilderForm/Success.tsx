import React, { FC, SyntheticEvent} from "react"

const Success: FC = () => {
    
    return (
        <div className="mt-[25%] px-10 pb-5 rounded-lg bg-brand-darker text-brand-orange text-xl">
            Submission Successfull!
            <button className="py-2 rounded-lg bg-brand-green text-md text-brand-darkest">Go to Dashboard</button>

        </div>
    )
}

export default Success
