import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import dayjs from 'dayjs'
import { ArticleTypeToggleComponent } from '@/components/article-type-toggle.jsx'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggleDropdownMenu } from '@/components/theme-toggle.js'

const currentYear = dayjs().year()

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anurag Notes',
  description: 'Exploring tech trends and current affairs'
}

export default function RootLayout({ children }) {
  let header = (
    <header className="pt-[14px] pb-[14px] px-0 flex justify-between flex-wrap gap-2">
      <Link href={'/'}>
        <h1 className="text-3xl font-bold no-underline">Anurag Notes</h1>
      </Link>
      <div className="flex items-center gap-2">
        <ArticleTypeToggleComponent />
        <ThemeToggleDropdownMenu />
      </div>
    </header>
  )

  let footer = (
    <footer className="max-w-[800px] mx-auto w-full flex items-center justify-center p-6">
      <p>&copy; {currentYear} Anurag Pradhan. All rights reserved.</p>
    </footer>
  )
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-[800px] mx-auto flex flex-col min-h-screen p-3">
            <header className="flex-shrink-0">{header}</header>
            <main className="flex-1">{children}</main>
            <footer className="flex-shrink-0">{footer}</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
