import { DRIVE } from "../utils/Common";
import Data from "./Data";
import {useState} from "react";

const RightSection = ({uid}) => {
  const { LOWER_ARROW, GRID, MENU, CROSS } = DRIVE;
  const [isGrid, setIsGrid] = useState(false)
  return (
    <div className="flex min-w-[80%] max-w-[80%] flex-col top-5 right-0 absolute z-50">
    <div className="w-[95%] m-auto border-b border-gray-100 pb-2">
      <div className="flex justify-between">
        <div className="flex justify-between ">
          <span className="w-full">My Drive</span>
          <img src={LOWER_ARROW} />
        </div>
        <div className="flex gap-6 items-center">
          <div><img src={MENU} className="cursor-pointer" onClick={() => setIsGrid(false)}/></div>
          <div><img src={GRID} className="cursor-pointer" onClick={() => setIsGrid(true)}/></div>
        </div>
      </div>
    </div>
    <Data isGrid={isGrid} uid={uid}/>
    </div>
  );
};

export default RightSection;
