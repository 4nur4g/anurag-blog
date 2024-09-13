import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import dayjs from 'dayjs'
const currentYear = dayjs().year()

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anurag Notes',
  description: 'Exploring tech trends and current affairs'
}

export default function RootLayout({ children }) {
  let header = (
    <header>
      <Link href={'/'}>
        <h1>Anurag Pradhan</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>&copy; {currentYear} Anurag Pradhan. All rights reserved.</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
