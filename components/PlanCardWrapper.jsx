



import { PLANS_LIST } from '@/utils/constant'
import React from 'react'
import PlanCard from './PlanCard'

const PlanCardWrapper = () => {
  return (
    <div className="plans-cards py-4 flex gap-4">

        {
            PLANS_LIST.map(plan => <PlanCard key={plan?.id} {...plan}  />)
        }

    </div>
  )
}

export default PlanCardWrapper