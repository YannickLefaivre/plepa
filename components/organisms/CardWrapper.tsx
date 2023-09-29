'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Image as NextUIImage } from '@nextui-org/image'
import { Link as NextUILink } from '@nextui-org/link'
import { Card, CardHeader, CardBody } from '@nextui-org/card'
import getFormattedDate from '@/lib/formatDate'

type Props = {
  post: BlogPost
}

export default function CardWrapper({ post }: Props) {
  const { id, frontMatter } = post
  const formattedDate = getFormattedDate(frontMatter.createdAt)

  return (
    <>
      <Card
        as="article"
        className="self-stretch items-center flex flex-col bg-white rounded-sm shadow">
        <CardHeader
          as="header"
          className="max-w-sm h-[202px] p-0 self-stretch justify-center items-center inline-flex rounded-bl-sm rounded-br-sm">
          <NextUIImage
            as={Image}
            removeWrapper
            width={330}
            height={202}
            src={frontMatter.cover.src}
            alt={frontMatter.cover.alt}
            className="object-cover object-center w-full h-full self-stretch flex-col justify-start items-start flex rounded-bl-sm rounded-br-sm"
          />
        </CardHeader>
        <CardBody className="max-w-sm h-[253px] self-stretchpx-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
          <p className="text-stone-300 text-sm font-semibold font-['Mulish'] leading-normal tracking-tight">
            {formattedDate}
          </p>
          <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
            <h3 className="text-slate-800 text-base font-bold font-['Mulish'] leading-normal tracking-tight">
              {frontMatter.title}
            </h3>
            <p className="self-stretch text-neutral-500 text-sm font-semibold font-['Mulish'] leading-normal tracking-tight">
              {frontMatter.description}
            </p>
          </div>
          <NextUILink
            as={Link}
            className="text-green-500 text-sm font-semibold font-['Mulish'] leading-normal tracking-tight"
            href={`/posts/${id}`}>
            Lire l&apos;article
          </NextUILink>
        </CardBody>
      </Card>
    </>
  )
}
