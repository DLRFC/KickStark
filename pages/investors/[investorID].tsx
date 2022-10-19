import { url } from "inspector";
import { NextPage } from "next";
import Header from "../../components/header";

// right now this page is only accessible by typing into browser url
// need to give the option to go here when user connects wallet and has already funded something.
// Investor's dashboard will show individual wallet's portfolio of investments, 
// with each project's summary, current status and link to project's dedicated page.
// All interactions will happen from the project page.

const InvestorDashboard: NextPage = () => {
    return (
        <div className="relative w-screen h-screen circuitBoard">

            <Header title="investor dashboard" />

        </div>
    )
}

export default InvestorDashboard