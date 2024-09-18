import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card.jsx'

export default function PostCard(props) {
  const { post } = props
  return (
    <Link className="unstyled" href={`/article/${post.slug}`}>
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.bio}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
