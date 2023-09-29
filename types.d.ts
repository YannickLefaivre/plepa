type BlogPostCover = {
  src: string
  alt: string
}

type BlogPost = {
  id: string
  frontMatter: {
    title: string
    description: string
    category: string
    subCategory: string
    createdAt: string
    updatedAt: string
    cover: BlogPostCover
  }
}
