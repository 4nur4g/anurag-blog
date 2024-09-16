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
      >
        <ToggleGroupItem value="All" aria-label="Show all articles">
          <Globe className="h-4 w-4 mr-2" />
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="Tech" aria-label="Show tech articles">
          <Monitor className="h-4 w-4 mr-2" />
          Tech
        </ToggleGroupItem>
        <ToggleGroupItem value="Society" aria-label="Show society articles">
          <Users className="h-4 w-4 mr-2" />
          Society
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
