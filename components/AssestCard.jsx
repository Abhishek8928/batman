import React from "react";

const AssestCard = ({name, price , holding ,percentage,color}) => {
  return (
    <div className="border-[1px] flex items-center gap-2 p-3 w-[23%]  rounded-md border-[--grays-mauve-4]">
      <div style={{backgroundColor:`var(${color})`}} className="h-6 rounded-md w-1 bg-[--yellow-9]"></div>

      <div className="  ">
        <p className=" text-base text-[--grays-mauve-11]">{name}</p>
        <p className="text-[--grays-mauve-8] text-xs font-bold">
          {percentage}% <span className="font-medium">. {price} USD</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default AssestCard;
