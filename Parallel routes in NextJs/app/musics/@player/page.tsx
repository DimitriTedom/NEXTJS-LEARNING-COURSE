import { BsPause, BsPlay, BsSkipBackward, BsSkipForward } from "react-icons/bs"

const Player = () => {
  return (
    <div className="fixed bottom-0 left-[35%] w-[40rem] bg-[#171717] p-4 flex items-center justify-between text-white">
        <div className="w-16 h-16 bg-gray-700 rounded-md"></div>
        <div className="flex items-center gap-6">
            <BsSkipBackward size={24} className="cursor-pointer hover:text-white transition-colors"/>
            <BsPlay size={24} className="cursor-pointer text-white hover:text-gray-300 transition-colors"/>
            <BsPause size={24} className="cursor-pointer text-white hover:text-gray-300 transition-colors hidden"/>
            <BsSkipForward size={24} className="cursor-pointer hover:text-white transition-colors"/>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
            <span>2:21</span>
            <div className="relative w-64 h-1 bg-gray-700 rounded-md">
                <div className="absolute top-0 left-0 bg-white rounded-md" style={{width:"50%"}}/>
                <input type="range" className="absolute top-0 left-0 w-full h-1 bg-transparent cursor-pointer"/>
            </div>
            <span>3:11</span>
        </div>
    </div>
  )
}

export default Player