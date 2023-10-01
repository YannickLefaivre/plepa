import React from 'react'
import CardWrapper from '@/components/organisms/CardWrapper'
import Pagination from '@/components/molecules/PaginationWrapper'

type CardListProps = {
  posts: BlogPost[]
}

export default function CardList({ posts }: CardListProps) {
  return (
    <>
      <ul className="w-full flex flex-row flex-wrap justify-start gap-x-7 gap-y-16">
        {posts.map((post) => (
          <li key={post.id}>
            <CardWrapper post={post} />
          </li>
        ))}
      </ul>
      {posts.length > 9 && <Pagination />}
    </>
  )
}
