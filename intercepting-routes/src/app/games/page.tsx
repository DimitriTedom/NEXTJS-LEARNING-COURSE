import GameCard from "@/components/GameCard"
import SideBar from "@/components/SideBar"
import { games } from "@/db/data"

const Games = () => {
  return (
    <div className="flex h-screen">
        {/* SideBar */}
        <SideBar/>
        <div className="flex-1 bg-gray-100 p-5">
            <h1 className="text-2xl font-bold mb-4">Featured Games</h1>
            <div className="flex gap-4">
                {/* Game Card */}
                {games.map(game=>(
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Games