"use client"

import { CRYPTO_SEA_LOGO_URL } from "@/utils/constant";
import React from "react";
import Image from "next/image";
import RowNavLink from "@/components/RowNavLink";
import SvgLine from "@/components/SvgLine";
import {
  CameraIcon,
  EyeIcon,
  IconBarGraph,
  IconClockTimer,
  IconFocusTarget,
  IconGearSettings,
  IconHouse,
  IconMonitor,
  SunglassesIcon,
} from "@/components/svg";
import { usePathname } from "next/navigation";


const layout = ({ children }) => {
  const pathname = usePathname();

  

  function checkActivePath(path){
    
    return pathname === path    ? true : false
  }
  
  return (
    <>
      <div className="w-full h-screen  flex  ">
        <div className="hidden lg:block">
          <div className="w-[256px] gap-y-2 flex flex-col justify-between p-4 overflow-hidden  h-screen ">
            <div className="top-sidebar-panel flex justify-between items-center w-full py-2 ">
              <Image
                alt="crypto-logo"
                src={CRYPTO_SEA_LOGO_URL}
                width={140}
                height={140}
              />

              <div className="size-[20px] flex justify-center items-center p-1 rounded-full bg-[#2f2f32]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#706f79"
                >
                  <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                </svg>
              </div>
            </div>

            <SvgLine />

            <RowNavLink handler={checkActivePath} href="/dashboard" icon={<IconHouse />} text="Dashboard" />

            <SvgLine />

            <div className="group-link-portfolio">
              <small className="text-[#504f58] text-xs inline-block px-2 py-2 ">
                portfolio
              </small>

              <RowNavLink handler={checkActivePath} href="/dashboard/overview" icon={<IconMonitor />} text="Overview" />
              <RowNavLink handler={checkActivePath} href="/dashboard/position" icon={<IconBarGraph />} text="Position" />
              <RowNavLink handler={checkActivePath} href="/dashboard/history" icon={<IconClockTimer />} text="History" />
            </div>

            <SvgLine />

            <div className="group-link-portfolio  flex-1">
              <RowNavLink handler={checkActivePath} href="/dashboard/exchange" icon={<EyeIcon />} text="Exchanges" />
              <RowNavLink handler={checkActivePath} href="/dashboard/plans" icon={<CameraIcon />} text="Plans" />
              <RowNavLink handler={checkActivePath} href="/dashboard/affiliate" icon={<SunglassesIcon />} text="Affiliate program" />
            </div>

            <div className="group-link-portfolio">
              <RowNavLink handler={checkActivePath} href="/dashboard/setting" icon={<IconGearSettings />} text="Setting" />
              <RowNavLink handler={checkActivePath} href="/dashboard/help" icon={<IconFocusTarget />} text="Help" />
            </div>
          </div>
        </div>

        <div className="flex-1 h-screen p-2 ">{children}</div>
      </div>
    </>
  );
};

export default layout;
