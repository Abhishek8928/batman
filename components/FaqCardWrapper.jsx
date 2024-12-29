import { faqConfig } from "@/utils/constant";
import React from "react";

const FaqCardWrapper = () => {
  return (
    <div>
      <div className="text-[--grays-mauve-12]  mb-10 text-base ">FAQ</div>

      <div className="w-full overflow-hidden">


      <div className="flex justify-start w-full flex-wrap gap-3">
  {faqConfig.map((faq) => (
    <div key={faq?.id} className="w-[48%] flex-shrink-0 flex flex-col justify-between">
      <div className="text-[--grays-mauve-11] text-xs mb-2">
        {faq?.question}
      </div>
      <div className="text-[--grays-mauve-9] text-xs mb-2">
        {faq?.answer}
      </div>

      <div className="separator my-8"></div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default FaqCardWrapper;
