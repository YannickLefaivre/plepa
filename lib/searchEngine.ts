export function searchPosts(posts, userInput) {
  if (userInput.length >= 3) {
    let searchedPosts = []

    searchedPosts = posts.filter((post) => {
      if (post.frontMatter.title.toLowerCase().includes(userInput) !== false) {
        return true
      } else if (post.frontMatter.description.toLowerCase().includes(userInput) !== false) {
        return true
      } else if (post.frontMatter.category.toLowerCase().includes(userInput) !== false) {
        return true
      } else if (post.frontMatter.subCategory.toLowerCase().includes(userInput) !== false) {
        return true
      } else {
        return false
      }
    })

    return searchedPosts
  } else {
    return posts
  }
}

export function searchPostsByCategoryAndSubCategory(posts, category, subCategory = null) {
  return posts.filter((post) => {
    if (category === post.frontMatter.category) {
      if (subCategory === null) {
        return true
      } else if (subCategory === post.frontMatter.subCategory) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  })
}