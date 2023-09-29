import React from 'react'

type Props = {
  title: string
  subtitle: React.JSX.Element
}

export default function PageHeading({ title, subtitle }: Props) {
  return (
    <div className="flex-col justify-start items-start gap-2.5 flex">
      <h1 className="text-center text-slate-800 text-2xl font-bold font-['Philosopher'] leading-loose tracking-tight">
        {title}
      </h1>
      <p className="text-neutral-500 text-base font-medium font-['Mulish'] leading-relaxed tracking-tight">
        {subtitle}
      </p>
    </div>
  )
}
