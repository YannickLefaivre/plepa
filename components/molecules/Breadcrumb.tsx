import React from 'react'
import { BreadcrumbSeparator } from '../atoms/icons'

type Props = {
  previousPagesLink: Array<{href: string, label: string}>,
  currentPageTitle: string
}

export default function Breadcrumb({ previousPagesLink, currentPageTitle }: Props) {
  return (
    <div className="py-2.5 justify-start items-center gap-[15px] inline-flex">
      {previousPagesLink.map((link) => (
        <>
          <a
            href={link.href}
            className="text-center text-slate-800 text-sm font-semibold font-['Mulish'] leading-normal tracking-tight">
            {link.label}
          </a>
          <div className="w-[7px] h-3 relative">
            <BreadcrumbSeparator />
          </div>
        </>
      ))}
      <p className="text-center text-neutral-500 text-sm font-semibold font-['Mulish'] leading-normal tracking-tight">
        {currentPageTitle}
      </p>
    </div>
  )
}
