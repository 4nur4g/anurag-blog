'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card.jsx'

const MotionCard = motion(Card)

export default function PostCard(props) {
  const { post, index } = props
  return (
    <Link className="unstyled" href={`/article/${post.slug}`}>
      <MotionCard
        className="cursor-pointer"
        whileHover={{
          scale: 1.01,
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)'
        }}
        whileTap={{ scale: 0.99 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut' // Use a predefined easing function
        }}
      >
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.bio}</CardDescription>
        </CardHeader>
      </MotionCard>
    </Link>
  )
}
