import type { NextPage } from "next"
import Menu from "../components/menu"
import Wallet from "../components/wallet"

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen circuitBoard">
      <div className="w-full flex justify-between pt-[4%] pr-[8%]">
        <div></div>
        <Wallet />
      </div>

      <Menu />

      <div className="bg-brand-orange w-full fixed bottom-0">
        <p className="text-brand-darkest text-lg text-center py-3">
          Powered by StarkNet
        </p>
        {/* not sure yet why it won't find files from /public */}
        {/* <Image src="/public/starknet-logo.png" width="200px" height="50px"/> */}
      </div>
    </div>
  )
}

export default Home
