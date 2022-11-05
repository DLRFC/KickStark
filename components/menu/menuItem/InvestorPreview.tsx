import React, { FC, useState, Fragment } from "react"
import Image from "next"

const InvestorPreview: FC = () => {


    return (
        <div className="mt-[21%] ml-[16%] mr-[5%] bg-brand-darker text-brand-gray">
            <img src={"investor-dashboard.png"} alt={"preview of an investor dashboard"} />
        </div>
    )
}

export default InvestorPreview
