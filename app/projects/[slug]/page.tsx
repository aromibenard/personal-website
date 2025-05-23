import BreadCrumbs from "@/components/bread-crumbs"
import NextPrevious from "@/components/next-previous"
import { TechStackCard } from "@/components/tech-stack-card"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PROJECT_QUERY } from "@/queries/project-query"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Project } from "@/types/project"
import { PortableText} from "next-sanity"
import Image from "next/image"
import Link from "next/link"

export default async function Page({
    params,
} : {
    params: Promise<{ slug: string }>
}) {
    const project = await client.fetch<Project>(PROJECT_QUERY, await params)
    const date = new Date ( project.publishedAt as string ) ? new Date ( project.publishedAt as string ) : new Date()

    const formattedDate = new Intl.DateTimeFormat("en-us", {
        month: "long",
        day: "numeric",
        year: 'numeric'
    }).format(date)

    const imageUrl = urlFor(project.thumbnail).url()

    return (
        <div className="p-8 md:p-14 md:px-8 flex flex-col space-y-4 w-full min-h-screen">
            <BreadCrumbs />
            <h1 className="font-extrabold text-3xl relative mx-auto drop-shadow">{project.title}</h1>
            { formattedDate && (
                <h2 className="text-muted-foreground relative mx-auto text-sm -mt-2">{formattedDate}</h2>
            )}
            {typeof project.description === "string" ? (
                <p className="px-2">{project.description}</p>
            ) : (
                <div className="px-2">
                    <PortableText value={project.description}/>
                </div>
            )}
            <Separator />
            <h2 className="font-semibold text-primary">Tech Stack</h2>
            <div className=" flex space-x-2 items-center" >
                {project.techStack && project.techStack.map(stack => {
                    return (
                        <TechStackCard content={stack} key={stack} />
                    )
                })}
            </div>
            <div className="relative h-[20rem] my-4">
                <Image 
                    fill={true}
                    alt={project.title}
                    src={imageUrl}
                    className="rounded-md shadow-md"
                />
            </div>
            <div className="flex my-4 space-x-4">
                {project.projectUrl && (
                    <Link 
                        href={project.projectUrl}
                        className={`${buttonVariants({ variant: 'default'})}`}
                    >View Deployment</Link>
                )}
                {project.githubUrl && (
                    <Link 
                        href={project.githubUrl}
                        className={`${buttonVariants({ variant: 'outline'})}`}
                    >Source Code</Link>
                )}
            </div>
            <NextPrevious />
        </div>
    )
}