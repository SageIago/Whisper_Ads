import React from 'react'

interface Props {
    index: number
    text: string
}

const Timeline = ({index, text}: Props) => {
  return (
    <li className="mb-10 ms-6">
        <span className="absolute -start-3 flex size-[25px] items-center justify-center rounded-full bg-primary-100 ring-2 ring-white">
            <span className="font-inter text-[11px] font-bold leading-[24px] text-primary-300">{index}</span>
        </span>
        <h3 className="ml-2 text-[14px] leading-[21px] text-primary-200">{text}</h3>
    </li>
  )
}

export default Timeline