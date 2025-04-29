import { client } from "@/sanity/lib/client"
import ImageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { clsx, type ClassValue } from "clsx"
import { PortableTextSpan } from "sanity"
import { PortableTextBlock } from "sanity"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)) 
}

const builder = ImageUrlBuilder(client)

export function urlFor(source?: SanityImageSource | null) {
  if (!source) {
    return builder.image({} as SanityImageSource)
  }
  return builder.image(source).fit('crop').auto('format')
}

export const truncatePortableText = (value: PortableTextBlock[], wordLimit: number): PortableTextBlock[] => {
  // Helper function to count words in a text node
  const countWords = (text: string): number => {
    return text.split(/\s+/).length;
  }

  let wordCount = 0;
  const truncatedText: PortableTextBlock[] = []

  for (const block of value) {
    if (block._type === 'block' && block.children) {
      // Go through each block's children and add words until the limit is reached
      let currentText = '';
      for (const child of block.children as PortableTextSpan[]) {
        const wordsInChild = countWords(child.text);
        if (wordCount + wordsInChild <= wordLimit) {
          // Add the entire child text
          currentText += child.text + ' ';
          wordCount += wordsInChild;
        } else {
          // Truncate the words to fit within the word limit
          const remainingWords = wordLimit - wordCount;
          currentText += child.text.split(/\s+/).slice(0, remainingWords).join(' ') + '...';
          wordCount = wordLimit;
          break;
        }
      }

      // generating random key
      const blockKey = block._key || `block-${Math.random().toString(36).substring(2,9)}`

      // Add the block with the truncated text
      truncatedText.push({
        _type: 'block',
        _key: blockKey,
        children: [{
          _type: 'span',
          text: currentText.trim()
        }]
      })

      // If we've reached the word limit, stop processing further blocks
      if (wordCount >= wordLimit) break;
    }
  }

  return truncatedText;
}


export const truncateDescription = (text: string, maxWords: number): string => {
  const words = text.split('')

  if(words.length <= maxWords) return text

  const truncatedText = words.slice(0, maxWords).join(' ') + '...'
  return truncatedText
}


