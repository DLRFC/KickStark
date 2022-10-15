import type { NextPage } from 'next'

const catalogue: NextPage = () => {
    return (
        <div className="relative w-screen h-screen circuitBoard">
            <div className="w-full pl-12 pr-[20%] pt-[12%] pb-[15%] justify-end">
                <div className="w-full">
                    <div className="text-brand-orange text-4xl text-right pr-[10%]">catalogue</div>
                    <hr className="border-1 border-brand-green"></hr>
                    <hr className="border-1 border-brand-green"></hr>
                    <hr className="border-1 border-brand-green mb-1"></hr>
                    <hr className="border-1 border-brand-green"></hr>
                </div>
            </div>    
        </div>
    )
}

export default catalogue