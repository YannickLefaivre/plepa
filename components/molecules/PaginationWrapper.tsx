import React from 'react'

type Props = {}

export default function Pagination({}: Props) {
  return (
    <div className="w-[324px] h-[74px] bg-white rounded-md shadow border border-stone-300 justify-center items-center inline-flex">
      <div className="justify-start items-start inline-flex">
        <div className="p-[25px] bg-zinc-100 border border-stone-300 justify-center items-center flex">
          <div className="text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
            First
          </div>
        </div>
        <div className="px-5 py-[25px] bg-white border border-gray-200 justify-center items-center flex">
          <div className="text-center text-sky-500 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
            1
          </div>
        </div>
        <div className="px-5 py-[25px] bg-sky-500 border border-gray-200 justify-center items-center flex">
          <div className="text-center text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
            2
          </div>
        </div>
        <div className="px-5 py-[25px] bg-white border border-gray-200 justify-center items-center flex">
          <div className="text-center text-sky-500 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
            3
          </div>
        </div>
        <div className="p-[25px] bg-white border border-gray-200 justify-center items-center flex">
          <div className="text-center text-sky-500 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
            Next
          </div>
        </div>
      </div>
    </div>
  )
}
