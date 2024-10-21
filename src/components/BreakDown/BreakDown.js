import React from 'react'

const BreakDown = () => {
  return (
    <div className="w-full bg-blue-700 flex justify-between text-white px-[220px] py-[50px]">
     <div className="flex flex-col items-center gap-5">
        <p className="text-5xl font-medium">47</p>
        <p className="text-xl">Millions of Users' Top Choice</p>
     </div>
     <div className="flex flex-col items-center gap-5">
        <p className="text-5xl font-medium">$2,235,908,651</p>
        <p className="text-xl">24h Trading Volume</p>
     </div>
     <div className="flex flex-col items-center gap-5">
        <p className="text-5xl font-medium">700+</p>
        <p className="text-xl">Prime Virtual Assets</p>
     </div>
    </div>
  )
}

export default BreakDown