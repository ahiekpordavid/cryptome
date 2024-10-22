import React from 'react'

const BreakDown = () => {
  return (
    <div className="w-full bg-blue-700 flex md:flex-row flex-col justify-between text-white lg:px-[220px] lg:py-[50px] md:px-[120px] md:py-[30px] py-[20px] px-[20px] gap-5">
     <div className="flex flex-col items-center md:gap-5 gap-1">
        <p className="lg:text-5xl md:text-3xl text-2xl font-medium">47</p>
        <p className="lg:text-xl md:text-lg text-xs">Millions of Users' Top Choice</p>
     </div>
     <div className="flex flex-col items-center md:gap-5 gap-1">
        <p className="lg:text-5xl md:text-3xl text-2xl font-medium">$2,235,908,651</p>
        <p className="lg:text-xl md:text-lg text-xs">24h Trading Volume</p>
     </div>
     <div className="flex flex-col items-center md:gap-5 gap-1">
        <p className="lg:text-5xl md:text-3xl text-2xl font-medium">700+</p>
        <p className="lg:text-xl md:text-lg text-xs">Prime Virtual Assets</p>
     </div>
    </div>
  )
}

export default BreakDown