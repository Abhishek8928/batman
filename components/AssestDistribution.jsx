import { CRYPTO_CONFIG } from "@/utils/constant";
import React from "react";
import AssestCard from "./AssestCard";

const AssestDistribution = () => {
  return (
    <div className="w-full py-4">
      <div className="w-full h-1 flex rounded-lg overflow-hidden  ">
        {CRYPTO_CONFIG.map((item) => {
          return (
            <div
              style={{
                background: `var(${item.color})`,
                width: `${item.percentage}%`,
              }}
              className="h-full "
            ></div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4 pt-6 justify-between">

        {
            CRYPTO_CONFIG.map(assest => <AssestCard {...assest} />)
        }

      </div>
    </div>
  );
};

export default AssestDistribution;
