import Link from 'next/link'

export default function PostCard(props) {
  const { post } = props
  return (
    <Link className="unstyled" href={`/article/${post.slug}`}>
      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300">
        <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
        <p className="flex-1 text-gray-600 text-sm">{post.bio}</p>
      </div>
    </Link>
  )
}
