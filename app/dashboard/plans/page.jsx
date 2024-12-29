import FaqCardWrapper from "@/components/FaqCardWrapper";
import PlanCardWrapper from "@/components/PlanCardWrapper";
import PlanIncludedWrapper from "@/components/PlanIncludedWrapper";
import SupportedPayment from "@/components/SupportedPayment";
import { CameraIcon } from "@/components/svg";
import React from "react";

const PlansPage = () => {
  return (
    <div className="border-[1px] flex flex-col relative  h-full rounded-2xl border-[--grays-mauve-3]">
      <div className="tab-top py-5 border-[--grays-mauve-3] border-b-[1px] px-5 flex items-center gap-2">
        <CameraIcon />
        <h2 className="text-sm">Plans</h2>
      </div>

      <div className="p-2 flex-1 flex flex-col h-full  overflow-hidden ">
        <div className="w-full py-8  flex justify-center">
          <div className="w-[900px] ">
            <h2 className="text-sm text-[--grays-mauve-11]">
              Pricing & Solutions
            </h2>
            <p className="text-xs text-[--grays-mauve-9]">
              Our bot and indicator lead the pack with more solutions on the
              way. Money-back guarantee, cancel anytime.
            </p>
          </div>
        </div>

        <div className="rounded-md flex-1     overflow-hidden   w-full bg-[#1D1D20]">
          <div className="w-full h-full overflow-y-scroll flex justify-center ">

          <div className=" h-full w-[900px] py-8  ">
            <div className="text-[--gray-mauve-12]">Plans</div>

            <div className="plans-cards py-4">
              <PlanCardWrapper />
            </div>


            <div className="supported-payment-option">

              {
                
                <SupportedPayment  />
              }


            </div>

            <div className="separator my-6"></div>

            <PlanIncludedWrapper />

            <div className="separator my-6"></div>


            <FaqCardWrapper />


          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
