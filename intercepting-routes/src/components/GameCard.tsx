import Image from "next/image";

type GameProps = {
  game: {
    id: number;
    name: string;
    img: string;
  };
};
const GameCard = ({ game }: GameProps) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <Image src={game.img} alt={game.name} width={200} height={32} className="w-full h-32 object-cover rounded-md"/>
      <h3>{game.name}</h3>
    </div>
  );
};

export default GameCard;
