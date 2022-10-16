import { url } from "inspector";
import { NextPage } from "next";
import Header from "../../components/header";

// right now this page is only accessible by typing into browser url
// should give the option to go here when user connects wallet and has already funded something

const InvestorDashboard: NextPage = () => {
    return (
        <div className="relative w-screen h-screen circuitBoard">

            <Header title="investor dashboard" />

        </div>
    )
}

export default InvestorDashboard