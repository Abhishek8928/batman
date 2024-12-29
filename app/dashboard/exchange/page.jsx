


import { EyeIcon } from '@/components/svg';
import { EMPTY_EXCHANGE_IMG_URL, EXCHANGE_LIST } from '@/utils/constant';
import Image from 'next/image';
import React from 'react'

const ExchangePage = () => {
  return (
    <div className="border-[1px] relative overflow-hidden h-full rounded-2xl border-[--grays-mauve-3]">
          <div className="tab-top py-5 border-[--grays-mauve-3] border-b-[1px] px-5 flex items-center gap-2">
            <EyeIcon />
            <h2 className="text-sm">Exchanges</h2>
          </div>
    
          <div className="p-2 h-full">
            <div className="  py-6">
              <div className="flex justify-center">
                <Image
                alt="exchange-img"
                  quality="100"
                  width={90}
                  height={100}
                  src={EMPTY_EXCHANGE_IMG_URL}
                />
              </div>
    
              <div className="py-2">
                <h3 className="text-[--grays-mauve-12] pb-1 text-sm text-center">
                  Connect an exchange to start tracking
                </h3>
                <p className="text-[--grays-mauve-11] mx-auto  text-xs w-[240px] text-center">
                  Connect your current exchange or create a new Bybit account using
                  our reliable and convenient integration
                </p>
              </div>
            </div>
    
            <div className="w-full max-h-[56%]  overflow-y-scroll   py-4 flex justify-center bg-[#1D1D20]    rounded-lg ">
              <div className="py-8 w-[90%] lg:w-[80%] ">
                <h2 className="text-[--grays-mauve-11] mb-2 text-xs">
                  Available Exchange
                </h2>
    
                <div className="flex gap-8 h-full  flex-wrap">
                  {EXCHANGE_LIST.map((exchange,index) => (
                    <div key={index} className=" w-full md:w-[30%] flex-shrink-0 ">
                      <div className="w-full py-4  flex gap-3 items-start">
                        <div className="exchange-left-img w-fit rounded-md p-2 border-[1px] border-[--grays-mauve-3]">
                          <img src={exchange?.icon} />
                        </div>
    
                        <div className="exchange-content">
                          <div className="text-sm mb-1 text-[--grays-mauve-11]">
                            {exchange?.name}
                          </div>
                          <div className="text-xs mb-3 text-[--grays-mauve-8]">
                            {exchange?.url}
                          </div>
    
                          <button className="text-xs btn-shadow bg-[--grays-mauve-3] text-[--grays-mauve-11] py-1 px-4 rounded-md">
                            {exchange?.action}
                          </button>
                        </div>
                      </div>
                      <div className="separator"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ExchangePage;