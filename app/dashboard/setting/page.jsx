"use client";

import { BillingHistoryIcon, IconGearSettings } from "@/components/svg";
import React from "react";

const SettingPage = () => {
  return (
    <div className="border-[1px] flex flex-col relative  h-full rounded-2xl border-[--grays-mauve-3]">
      <div className="tab-top py-5 border-[--grays-mauve-3] border-b-[1px] px-5 flex items-center gap-2">
        <IconGearSettings />
        <h2 className="text-sm">Settings</h2>
      </div>

      <div className="p-2 flex-1  overflow-hidden ">
        <div className="w-full h-full overflow-y-scroll flex justify-center rounded-lg border-[--grays-mauve-3] border-[1px]   bg-[#1D1D20]">
          <div className="w-[500px]  py-8 px-2 ">
            <div className="text-[--gray-mauve-12]">Account</div>

            <div className="separator my-6"></div>

            <div className="input-control pb-6">
              <label
                htmlFor="fullName"
                className="fullName mb-1 text-xs block text-[--grays-mauve-11]"
              >
                Full Name
              </label>
              <div className="flex justify-between gap-2">
                <input
                  className="w-[85%]  bg-[--grays-mauve-1] placeholder:text-[--gray-mauve-8] text-xs p-2 rounded-md text-[--grays-mauve-11]"
                  value="Abhishek Sharma"
                  id="fullName"
                  type="text"
                />
                <button className="bg-[--grays-mauve-alpha-2] text-[--grays-mauve-7] rounded-lg text-xs w-[15%]">
                  Apply
                </button>
              </div>
            </div>

            <div className="input-control pb-6">
              <label
                htmlFor="email"
                className="fullName mb-1 text-xs block text-[--grays-mauve-11]"
              >
                Email
              </label>
              <div className="flex justify-between gap-2">
                <input
                  className="w-[85%]  bg-[--grays-mauve-3] placeholder:text-[--gray-mauve-8] text-xs p-2 rounded-md text-[--grays-mauve-11]"
                  value="abhishekshaxma8356@gmail.com"
                  id="email"
                  type="text"
                />
                <button className="text-xs btn-shadow bg-[--grays-mauve-3] text-[--grays-mauve-11] py-1 px-4 rounded-md w-[15%]">
                  Edit
                </button>
              </div>
            </div>

            <div className="separator my-6"></div>

            <div className="text-[--gray-mauve-12]">Plans</div>
            <div className="separator my-6"></div>

            <div className="flex gap-4 items-center justify-between">
              <div className="rounded-full size-12 bg-[--grays-mauve-1]">
                <img
                  className="w-full h-full object-cover "
                  src="data:image/png;base64,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"
                  alt="plan-img"
                />
              </div>

              <div className="plan-content flex-1 ">
                <div className="text-[--grays-mauve-12] text-sm mb-1">
                  Smart Bot
                </div>
                <div className="text-[--grays-mauve-10] text-xs">
                  $499 One-time
                </div>
              </div>

              <div className="btn-buy-now   bg-[#0A62F4] text-[--grays-mauve-12] text-xs  px-4 py-1.5 rounded-md">
                Buy now
              </div>
            </div>
            <div className="separator my-4"></div>

            <div className="flex gap-4 items-center justify-between">
              <div className="rounded-full size-12 bg-[--grays-mauve-1]">
                <img
                  className="w-full h-full object-cover "
                  src="data:image/png;base64,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"
                  alt="plan-img"
                />
              </div>

              <div className="plan-content flex-1 ">
                <div className="text-[--grays-mauve-12] text-sm mb-1">
                  Premium Indicator
                </div>
                <div className="text-[--grays-mauve-10] text-xs">
                  $30 Monthly
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <button className="bg-[--grays-mauve-alpha-2] text-[--grays-mauve-7] rounded-lg text-xs  px-4 py-1.5 ">
                  Apply
                </button>

                <button className="btn-buy-now   bg-[#AA2A2E] text-[--grays-mauve-12] text-xs  px-4 py-1.5 rounded-md">
                  Cancel
                </button>
              </div>
            </div>
            <div className="separator my-4"></div>

            <div className="billing-histroy">
              <div className="text-[--gray-mauve-12] pt-4">Billing Histroy</div>
              <div className="separator my-6"></div>

              <div className="w-full flex justify-between rounded-md bg-[#222225]">
                <div className="px-4 py-2  text-[--grays-mauve-10] text-xs">
                  Product
                </div>
                <div className="border-l-[1px] px-4 py-2  text-[--grays-mauve-10] w-1/4 text-xs border-[rgba(40,40,44)]">
                  Date
                </div>
                <div className="border-l-[1px] flex-1 px-4 py-2  text-[--grays-mauve-10] text-xs border-[rgba(40,40,44)]">
                  Amount
                </div>
                <div className="border-l-[1px] flex-1 px-4 py-2  text-[--grays-mauve-10] text-xs border-[rgba(40,40,44)]">
                  Payment Method
                </div>
              </div>

              <div className="billing-data flex justify-center h-[200px] items-center">
                <div className="text-center mx-auto">
                  <div className="bg-[--grays-mauve-1] mb-4 mx-auto flex justify-center items-center w-[46px] h-[46px] rounded-md">
                    <BillingHistoryIcon />
                  </div>

                  <div className="text-sm text-[--grays-mauve-10]">
                    No available data yet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
