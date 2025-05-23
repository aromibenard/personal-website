'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

const mainLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
]


export default function SideBarLinks () {
    const pathname = usePathname()

    return (
        <div className="flex flex-col gap-2">
            {mainLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                    <Link
                        href={link.href}
                        className={clsx(
                            'md:justify-start font-medium transition-colors hover:text-primary',
                            { 'text-primary': pathname === link.href }
                        )}
                    >
                        {link.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
