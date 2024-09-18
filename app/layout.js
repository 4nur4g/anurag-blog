import { Inter } from 'next/font/google'
import './globals.css'
import dayjs from 'dayjs'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'

const currentYear = dayjs().year()

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anurag Notes',
  description: 'Exploring tech trends and current affairs'
}

export default function RootLayout({ children }) {
  let footer = (
    <footer className="max-w-[800px] mx-auto w-full flex items-center justify-center p-6">
      <p>&copy; {currentYear} Anurag Pradhan. All rights reserved.</p>
    </footer>
  )
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background p-4">
            <div className="max-w-[800px] mx-auto flex flex-col min-h-screen bg-background">
              <Header />
              <main className="flex-1">{children}</main>
              <footer className="flex-shrink-0">{footer}</footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
