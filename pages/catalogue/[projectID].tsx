import { NextPage } from "next";
import Header from "../../components/header";
import ProgressReport from "../../components/projects/ProgressReport";
import MapForm from "../../components/projects/MapForm";
import Roadmap from "../../components/projects/Roadmap";
import Card from "../../components/projects/Card"
import List from "../../components/projects/List"

// This page is initialized when builders sbmit the first form with profile info,
// then they arrive here to their new page to fill out roadmap building form.
// when roadmap is submitted the page displays profile card, roadmap component and progess/status component
// All contract interactions will happen from this page. 
// Will include buttons to 
// 1)deposit funds (always available),
// 2)builders submit checkpoint requirements/claim funds (diasbled unless wallet is project owner),
// 3)collect refunds (disabled unless wallet is investor).
// Each button should pop up a modal to set params of the transaction.

const ProjectProfile: NextPage = () => {
    return (
        <div className="relative w-screen h-screen circuitBoard">

            {/* learn how to receive the project id/name here */}
            <Header title="[ Project Name ]" />

        </div>
    )
}

export default ProjectProfile