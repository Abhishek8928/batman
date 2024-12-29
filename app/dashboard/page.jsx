"use client";

import AssestDistribution from "@/components/AssestDistribution";
import ProgressiveLineChart from "@/components/ProgressiveLineChart";
import { IconHouse } from "@/components/svg";
import { CHART_VALUE } from "@/utils/constant";
import Image from "next/image";

function DashboardPage() {
  return (
    <div className="border-[1px] flex flex-col relative overflow-hidden h-full rounded-2xl border-[--grays-mauve-3]">
      <div className="tab-top py-5 border-[--grays-mauve-3] border-b-[1px] px-5 flex items-center gap-2">
        <IconHouse />
        <h2 className="text-sm">Dashboard</h2>
      </div>

      <div className="p-2 flex-1 flex overflow-hidden flex-col">
        <div className="w-[80%]  mx-auto py-4">
          <div className="text-sm mb-2 pl-6 border-l-[3px] border-[--grays-mauve-8] text-[--grays-mauve-11]">
            Total Value
          </div>
          <div className="text-xs pl-6 border-l-[2px] border-[--grays-mauve-4]">
            <p className="pb-2 text-lg text-[--grays-mauve-12]">
              12,849.84{" "}
              <span className="text-[--grays-mauve-11] text-sm">USD</span>{" "}
            </p>
            <p className="text-[--grays-mauve-11]">0.440725 BTC </p>
          </div>
        </div>

        <div className="bg-[#1D1D20] overflow-hidden  rounded-lg flex-1 w-full ">
          <div className="w-full h-full flex justify-center    overflow-y-scroll">
            <div className="w-[900px]  py-6">
              <div className="relative">
                <div className="w-[350px] absolute left-1/2 -translate-x-1/2 p-3 border-[--grays-mauve-8] border-[1px] bg-[--grays-mauve-4] rounded-md h-[100px]">
                  <div className="text-sm flex gap-2 items-center pb-2 text-[--grays-mauve-9]">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                    </svg>

                    <small className="font-bold">2024 - 29 - 12</small>
                  </div>

                  <div className="text-xs mb-3 gap-3 items-center  flex justify-between">
                    <div className="w-3 h-[2px] bg-white"></div>

                    <div className="text-[--grays-mauve-10] flex-1">
                      Cumulative Price Change of BTC (1%)
                    </div>
                    <div className="pill rounded-full w-fit bg-[--teal-alpha-4] text-[--teal-alpha-11] text-xs px-2 ">
                      0.21%
                    </div>
                  </div>

                  <div className="text-xs gap-3 items-center  flex justify-between">
                    <div className="w-3 h-[2px] bg-white"></div>

                    <div className="text-[--grays-mauve-10] flex-1">
                      Cumulative Price Change of USD (1%)
                    </div>
                    <div className="pill rounded-full w-fit bg-[#1D1D20] text-[--grays-mauve-11] text-xs px-2 ">
                      -6.83%
                    </div>
                  </div>
                </div>
                <div className="chart-info flex justify-between items-center">
                  <div className="pb-4">
                    <div className="cummulative-roi text-xs text-[--grays-mauve-11]">
                      Cummulative ROI
                    </div>
                    <div className="text-[--teal-alpha-11]">+3.94%</div>
                  </div>

                  <div className="bg-[--grays-mauve-4] gap-1  flex rounded-md py-1 px-[2px]">
                    <div className="text-xs text-[--grays-mauve-11] rounded-md bg-[#161618] px-2 py-1">
                      7 days
                    </div>
                    <div className="text-xs text-[--grays-mauve-11] rounded-md px-2 py-1">
                      30 days
                    </div>
                    <div className="text-xs text-[--grays-mauve-11] rounded-md px-2 py-1">
                      Custom
                    </div>
                  </div>
                </div>

                <div className="w-full h-[400px]">
                  <ProgressiveLineChart />
                </div>
              </div>

              <div className="assest-distribution py-6">
                <AssestDistribution />

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
