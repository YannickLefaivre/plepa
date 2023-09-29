import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '@/lib/sort'

const postsDirectory = path.join(process.cwd(), 'data')

/**
 * @credit Vercel (Shu Uesugi)
 * @see https://nextjs.org/learn/basics/create-nextjs-app
 * @credit Dave Gray
 * @see https://www.youtube.com/watch?v=puIQhnjOfbc
 * @returns {Array<BlogPost>}
 */
export function getSortedPostsData(order: string = 'descending'): Array<BlogPost> {
  // Get file names under /data/posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const blogPost: BlogPost = {
      id,
      frontMatter: {
        title: matterResult.data.title,
        description: matterResult.data.description,
        category: matterResult.data.category,
        subCategory: matterResult.data.subCategory,
        createdAt: matterResult.data.createdAt,
        updatedAt: matterResult.data.updatedAt,
        cover: {
          src: matterResult.data.coverSrc,
          alt: matterResult.data.coverAltText,
        },
      },
    }

    // Combine the data with the id
    return blogPost
  })
  // Sort posts by date
  return sortByDate(allPostsData, order)
}

/**
 * @credit Vercel (Shu Uesugi)
 * @see https://nextjs.org/learn/basics/create-nextjs-app
 * @credit Dave Gray
 * @see https://www.youtube.com/watch?v=puIQhnjOfbc
 * @returns {Promise<Array<BlogPost>>}
 */
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)

  const blogPostWithHTML: BlogPost & { postContent: string } = {
    id,
    frontMatter: {
      title: data.title,
      description: data.description,
      category: data.category,
      subCategory: data.subCategory,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      cover: {
        src: data.coverSrc,
        alt: data.coverAltText,
      },
    },
    postContent: content,
  }

  // Combine the data with the id
  return blogPostWithHTML
}
