import Link from 'next/link'

export default function PostCard(props) {
  const { post } = props
  return (
    <Link className="unstyled" href={`/article/${post.slug}`}>
      <div className="flex flex-col gap-3.5 p-3.5 bg-white rounded-[14px] shadow-md h-full border border-transparent transition duration-200 hover:border-slate-300">
        <h3>{post.title}</h3>
        <p className="flex-1 text-slate-600">{post.bio}</p>
        <div className="grid grid-cols-2 gap-3.5">
          <div>
            <h5>Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h5>Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
