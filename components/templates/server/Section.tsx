import React from 'react'
import Link from 'next/link'
import { Link as NextUILink } from '@nextui-org/link'
import { getSortedPostsData } from '@/lib/posts'
import CardList from '@/components/organisms/server/CardList'

type Props = {
  title: string
}

export default function Section({ title }: Props) {
  const posts = getSortedPostsData()

  const filteredPosts = posts.filter((post) => {
    return post.frontMatter.category === title
  })

  const latestPosts = filteredPosts.length === 3 ? [filteredPosts[0], filteredPosts[1], filteredPosts[2]] : filteredPosts

  return (
    <section className="w-full flex-col justify-start items-start gap-8 flex">
      <div className="w-full justify-between items-center inline-flex">
        <h2 className="self-stretch flex-col justify-start items-start gap-4 inline-flex text-neutral-700 text-[40px] font-bold font-['Philosopher'] leading-[57px] tracking-tight">
          {title}
          <div className="self-stretch h-[0px] border-4 border-neutral-700"></div>
        </h2>
        <NextUILink
          as={Link}
          href={`/posts?category=${title}`}
          className="px-10 py-[15px] bg-green-500 rounded-[40px] flex-col justify-start items-center gap-2.5 inline-flex text-center text-white text-2xl font-bold font-['Mulish'] leading-loose tracking-tight">
          Autres articles
        </NextUILink>
      </div>

      <CardList posts={latestPosts} />
    </section>
  )
}
