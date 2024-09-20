import PostCard from '@/components/PostCard'
import getPostMetadata from '@/utils/getPostMetadata'

export default function Home() {
  const postMetadata = getPostMetadata('articles')

  return (
    <main>
      <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-6">
        {postMetadata.map((post, postIndex) => (
          <li key={postIndex}>
            <PostCard post={post} index={postIndex} />
          </li>
        ))}
      </ul>
    </main>
  )
}
