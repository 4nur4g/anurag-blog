import Markdown from 'markdown-to-jsx'
import getPostMetadata from '@/utils/getPostMetadata'
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'

function getPostContent(slug) {
  const folder = 'articles/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('articles')
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : ''
  return {
    title: `The Bubbly Baker ${id.replaceAll('_', ' ')}`
  }
}

export default function RecipePage(props) {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <main className="grid grid-cols-1 gap-3.5">
      <Article post={post} />
    </main>
  )
}

const Article = ({ post }) => {
  const options = {
    overrides: {
      h1: {
        props: {
          className: 'text-3xl font-bold text-gray-800 mb-4 mt-6'
        }
      },
      h2: {
        props: {
          className: 'text-2xl font-semibold text-gray-700 mb-3 mt-5'
        }
      },
      h3: {
        props: {
          className: 'text-xl font-medium text-gray-700 mb-2 mt-4'
        }
      },
      p: {
        props: {
          className: 'text-gray-600 mb-4 leading-relaxed'
        }
      },
      ul: {
        props: {
          className: 'list-disc list-inside pl-4 space-y-2 mb-4 text-gray-600'
        }
      },
      ol: {
        props: {
          className:
            'list-decimal list-outside pl-8 space-y-2 mb-4 text-gray-600'
        }
      },
      li: {
        props: {
          className: 'pl-2 text-base'
        }
      },
      blockquote: {
        props: {
          className:
            'border-l-4 border-gray-300 pl-4 py-2 mb-4 italic text-gray-600'
        }
      },
      a: {
        props: {
          className: 'text-blue-600 hover:text-blue-800 underline'
        }
      },
      code: {
        props: {
          className: 'bg-gray-100 rounded px-1 py-0.5 font-mono text-sm'
        }
      }
    }
  }

  return (
    <article>
      <div className="flex flex-col gap-3.5">
        <Markdown options={options}>{post.content}</Markdown>
      </div>
    </article>
  )
}
