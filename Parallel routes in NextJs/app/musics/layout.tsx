import { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
  player,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs:ReactNode;
  player:ReactNode;
}) => {
  return <div className="flex">
    {sidebar}
    <div className="flex-1 p-6 bg-[#2f2f2f]">
      {songs}
      {player}
    </div>
    {children}
  </div>;
};

export default MusicLayout;
