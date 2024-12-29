


import planConfig from '@/utils/constant'
import React from 'react'

const PlanIncludedWrapper = () => {
  return (
    <div>

<div className="text-[--grays-mauve-11] text-center mb-10 text-xs ">
All plans include
      </div>

      <div className="flex justify-center px-12 flex-wrap gap-3  ">
              {planConfig.map((include) => (
                <div key={include?.id} className="flex-shrink-0  rounded-full border-[1px] border-[--grays-mauve-alpha-3] flex items-center gap-2 py-1 px-3 text-[--grays-mauve-11] text-sm">
                    {include?.icon}
                    <small>{include.text}</small>
                </div>
              ))}
            </div>
    </div>
  )
}

export default PlanIncludedWrapper