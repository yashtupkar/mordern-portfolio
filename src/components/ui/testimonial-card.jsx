import React from 'react'
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function TestimonialCard({ 
  author,
  text,    // Supporting legacy prop
  message, // New preferred prop
  href,
  className
}) {
  const Card = href ? 'a' : 'div'
  const displayMessage = message || text;
  const displayImage = author.image || author.avatar;
  const initials = author.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-[2rem] border border-white/5",
        "bg-white/3",
        "p-6 text-start sm:p-8",
        "hover:border-custom-accent/30 hover:bg-white/5 group",
        "min-w-[300px] max-w-[320px] sm:max-w-[320px] shrink-0",
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14 border border-white/10 group-hover:border-custom-accent/50 transition-colors duration-300 bg-white/5">
          {displayImage && <AvatarImage src={displayImage} alt={author.name} className="object-cover" />}
          <AvatarFallback className="bg-custom-accent/10 text-custom-accent font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-bold text-white leading-none mb-1 group-hover:text-custom-accent transition-colors duration-300">
            {author.name}
          </h3>
          <p className="text-sm font-semibold text-custom-accent">
            {author.role || author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-6 text-sm text-custom-muted leading-relaxed opacity-80 italic">
        "{displayMessage}"
      </p>
    </Card>
  )
}
