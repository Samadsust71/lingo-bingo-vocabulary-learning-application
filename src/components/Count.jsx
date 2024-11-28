import React from 'react'
import CountUp from 'react-countup'

const Count = ({countEnd=100}) => {
  return (
    <div className=' flex justify-center items-center text-6xl text-[#172566] font-bold'>
      <CountUp className='' end={countEnd} />
      <span>+</span>
    </div>
  )
}

export default Count
