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
    <header className="pt-[14px] pb-[14px] px-0">
      <Link href={'/'}>
        <h1 className="text-3xl font-bold no-underline">Anurag Pradhan</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer className="max-w-[800px] mx-auto w-full flex items-center justify-center p-6">
      <p>&copy; {currentYear} Anurag Pradhan. All rights reserved.</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className="flex flex-col p-4 min-h-screen text-slate-800 gap-4 sm:p-6 sm:gap-6 max-w-4xl mx-auto">
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
