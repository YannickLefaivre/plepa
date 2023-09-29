import React from 'react'
import CardWrapper from '@/components/organisms/CardWrapper'
import Pagination from '@/components/molecules/PaginationWrapper'

export default function CardList({ posts }) {
  return (
    <section className="w-full flex-col justify-start items-start flex gap-16">
      <ul className="w-full flex flex-row flex-wrap justify-between gap-x-7 gap-y-16">
        {posts.map((post: BlogPost) => (
          <li key={post.id}>
            <CardWrapper post={post} />
          </li>
        ))}
      </ul>
      {posts.length > 9 && <Pagination />}
    </section>
  )
}
