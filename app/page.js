import PostCard from '@/components/PostCard'
import getPostMetadata from '@/utils/getPostMetadata'

export default function Home() {
  const postMetadata = getPostMetadata('articles')

  return (
    <main className="flex flex-col gap-3.5">
      <ul className="flex flex-col gap-3.5">
        {postMetadata.map((post, postIndex) => (
          <li key={postIndex}>
            <PostCard post={post} index={postIndex} />
          </li>
        ))}
      </ul>
    </main>
  )
}
