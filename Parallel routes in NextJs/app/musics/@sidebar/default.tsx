import Image from "next/image";
import { BiHome, BiTrendingUp } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
const Default = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <BiHome /> Discover
            </li>

            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <BiTrendingUp /> Trending
            </li>

            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <BsClock /> Recent
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1,2,3,4,5].map(i=>(
            <div key={i} className="flex mt-[2rem] gap-4">
              <Image src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" alt="imae" className="h-15 w-15 bg-gray-700 rounded-md" width={60} height={60}/>
              <div>
                <p className="text-white">Random</p>
                <p className="text-gray-400 text-sm">Person</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>  )
}

export default Default