'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarLinks = [
    { title: 'Home', href: '/' },
    { title: 'Introduction',  href: '/introduction' },
    { title: 'About Me',  href: '/introduction/about-me' },
    { title: 'Tech Stack',  href: '/introduction/tech-stack' },
    { title: 'Projects',  href: '/projects' },
    { title: 'Skills',  href: '/skills' },
    { title: 'Contact',  href: '/contact' },
]

export default function NextPrevious() {
    const pathname = usePathname()
    const currentIndex = sidebarLinks.findIndex((link) => link.href === pathname)

    const prev = currentIndex > 0 ? sidebarLinks[currentIndex - 1] : null
    const next = currentIndex < sidebarLinks.length - 1 ? sidebarLinks[currentIndex + 1] : null

    if(!prev && !next) return null

    return (
        <div className="mt-10 flex justify-between border-t pt-6">
        {prev ? (
            <Link
            href={prev.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
            ← {prev.title}
            </Link>
        ) : <div />}

        {next ? (
            <Link
            href={next.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
            {next.title} →
            </Link>
        ) : <div />}
    </div>
    )
}