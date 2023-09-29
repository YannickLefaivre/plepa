import React from 'react'
import { Link } from '@nextui-org/link'

type FooterSections = {
  title: string
  links: Array<{ href: string; label: string }>
}

type Props = {
  footerSections: Array<FooterSections>
}

export default function Footer({ footerSections }: Props) {
  return (
    <footer className="w-full justify-center items-center gap-[120px] flex flex-row mb-16">
      {footerSections.map((section) => (
        <section
          key={`footer-section-${section.title}`}
          className="w-[150px] h-[271px] gap-6 flex flex-col">
          <div className="w-[90px] h-[43px]">
            <p className="w-full underline underline-offset-[11px] un text-black text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
              {section.title}
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {section.links.map((link) => (
              <li
                key={`footer-links-${link.label}`}
                className="w-[146.30px] h-[37px] text-black text-xl font-normal font-['Inter']">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </footer>
  )
}
