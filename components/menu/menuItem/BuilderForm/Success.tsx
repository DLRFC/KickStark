import React, { FC, SyntheticEvent} from "react"

const Success: FC = () => {
    
    return (
        <div className="flex flex-col items-center">
            Submission Successful!
            <button className="mt-4 p-2 rounded-lg bg-brand-green text-md text-brand-darkest">Go to Dashboard</button>

        </div>
    )
}

export default Success
