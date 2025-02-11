import React from 'react'

interface TitleHeadingProps {
    title: string
}

export default function TitleHeading({title}: TitleHeadingProps) {
  return (
    <div className="flex items-center">
            <div className="text-lg font-semibold md:text-2xl">{title}</div>
        </div>
  )
}
