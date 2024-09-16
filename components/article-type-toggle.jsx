'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Monitor, Users, Globe } from 'lucide-react'
import { useState } from 'react'

export function ArticleTypeToggleComponent() {
  const [articleType, setArticleType] = useState('All')

  return (
    <div className="flex flex-col items-center space-y-2">
      <ToggleGroup
        id="article-type-toggle"
        type="single"
        value={articleType}
        onValueChange={value => value && setArticleType(value)}
        className="bg-background border border-border rounded-md"
      >
        <ToggleGroupItem
          value="All"
          aria-label="Show all articles"
          className="px-3 py-2 data-[state=on]:bg-muted data-[state=on]:text-primary"
        >
          <Globe className="h-4 w-4 mr-2" />
          All
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Tech"
          aria-label="Show tech articles"
          className="px-3 py-2 data-[state=on]:bg-muted data-[state=on]:text-primary"
        >
          <Monitor className="h-4 w-4 mr-2" />
          Tech
        </ToggleGroupItem>
        <ToggleGroupItem
          value="Society"
          aria-label="Show society articles"
          className="px-3 py-2 data-[state=on]:bg-muted data-[state=on]:text-primary"
        >
          <Users className="h-4 w-4 mr-2" />
          Society
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
