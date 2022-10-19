import type { NextPage } from 'next'
import Header from '../../components/header'
import ProjectList from '../../components/projects/List'

const FullCatalogue: NextPage = () => {

    return (
        <div className="w-screen h-screen circuitBoard">

            <Header title="catalogue" />
            <div className="w-full text-right pr-[20%] pt-2 pb-6 text-brand-gray opacity-[70%] text-md ">
                <p>Select any project to view details. </p>
            </div>
        
            <div className="grid grid-cols-3 w-full px-[8%] justify-items-center">
                {ProjectList.map((project) => {
                    return (
                        project
                    )
                })
                }
            </div>

        </div>
    )
}

export default FullCatalogue