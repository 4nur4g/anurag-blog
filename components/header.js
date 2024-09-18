'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'
import { Drawer, DrawerContent } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { ArticleTypeToggleComponent } from './article-type-toggle'
import { ThemeToggleDropdownMenu } from './theme-toggle.js'
import Link from 'next/link'

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <header className="pt-[14px] pb-[14px] px-0 flex justify-between items-center flex-wrap gap-2">
      <Link href={'/'}>
        <h1 className="text-3xl font-bold no-underline">Anurag Notes</h1>
      </Link>
      {/* For larger screens */}
      <div className="hidden md:flex items-center gap-2">
        <ArticleTypeToggleComponent />
        <ThemeToggleDropdownMenu />
      </div>
      {/* For mobile screens */}
      <div className="md:hidden">
        <Button variant="outline" size="icon" onClick={toggleDrawer}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </div>
      <Drawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        className="p-4"
      >
        <DrawerContent>
          <div className="flex gap-4 justify-evenly my-6">
            <ArticleTypeToggleComponent />
            <ThemeToggleDropdownMenu />
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
