import { NextPage } from "next";
import Header from "../../components/header";


// give option to open this page when user connects wallet associated with an established project
const ProjectDashboard: NextPage = () => {
    return (
        <div className="relative w-screen h-screen circuitBoard">

            <Header title="project dashboard" />

        </div>
    )
}

export default ProjectDashboard