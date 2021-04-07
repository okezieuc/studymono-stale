import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
	
  return items
}

export function getNextPosts(slugNeeded) {
	const fields = [ 'title', 'date', 'slug', 'author', 'cover', 'excerpt',]
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
	const postLoc = posts.findIndex((post)=>{return post.slug==slugNeeded})
	if ( postLoc == -1) {
		return []
	}
	if ( postLoc == 0) {
		return [posts[posts.length-1], posts[1 % posts.length]]
	}
  return [posts[postLoc-1], posts[(postLoc + 1) % posts.length]]
}

export function getLatestPosts() {
	const fields = [ 'title', 'date', 'slug', 'author', 'cover', 'excerpt',]
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
	return [posts[0], posts[1], posts[2]]
}

export function getRecommendedPosts() {
	const fields = [ 'title', 'date', 'slug', 'author', 'cover', 'excerpt',]
  const slugs = getPostSlugs()
  const posts = slugs 
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
	return [posts[0], posts[1]]
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
