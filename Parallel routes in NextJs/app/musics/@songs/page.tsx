import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const SongsList = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Content is currently loading...");
    });
  });
  const songs = [
    {
      id: 1,
      artist: "Dopesmoke",
      title: "(67) Dopesmoke-smoking kills",
      time: "2:19",
    },
    {
      id: 2,
      artist: "Dopesmoke",
      title: "(67) Dopesmoke-smoking kills",
      time: "2:19",
    },
  ];
  return (
    <div className="w-[90%] mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Songs Collection
      </h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li
              key={song.id}
              className="flex items-center justify-between p-3 hover:bg-[#2a2929] rounded-md cusor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center gap-5">
                <Image
                  width={30}
                  height={30}
                  alt="image"
                  src={
                    "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                  }
                  className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0"
                />
                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-sm text-gray-400">{song.title}</p>
                </div>
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-1">
                    <BsClock size={16} />
                    <span>{song.title}</span>
                  </div>
                  <BiHeart
                    size={16}
                    className="cursor-pointer hover:text-red-500"
                  />
                  <button className="text-lg font-bold">:</button>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
