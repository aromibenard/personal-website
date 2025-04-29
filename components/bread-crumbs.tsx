'use client'

import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb"
import Link from "next/link"

function capitalizeWords(str: string) {
    return str
        .split("-")    
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default function BreadCrumbs() {
    const pathname = usePathname()
    const segments = pathname.split("/").filter(Boolean)

    return (
        <Breadcrumb className="my-2">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href='/' >
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/")
                    const label = capitalizeWords(decodeURIComponent(segment))
                    const isLast = index === segments.length - 1

                    return (
                        <div key={href} className="flex items-center space-x-2">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <span className="font-medium text-muted-foreground" >{label}</span>
                                ): (
                                    <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                        </div>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}