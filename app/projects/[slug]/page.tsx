import NextPrevious from "@/components/next-previous"
import { TechStackCard } from "@/components/tech-stack-card"
import { Separator } from "@/components/ui/separator"
import { PROJECT_QUERY } from "@/queries/project-query"
import { client } from "@/sanity/lib/client"
import { Project } from "@/types/project"
import { PortableText} from "next-sanity"

export default async function Page({
    params,
} : {
    params: Promise<{ slug: string }>
}) {
    const project = await client.fetch<Project>(PROJECT_QUERY, await params)
    const date = new Date ( project.publishedAt as string )

    const formattedDate = new Intl.DateTimeFormat("en-us", {
        month: "long",
        day: "numeric",
        year: 'numeric'
    }).format(date)

    return (
        <div className="p-8 md:p-14 md:px-8 flex flex-col space-y-4 w-full min-h-screen">
            <h1 className="font-extrabold text-3xl relative mx-auto drop-shadow">{project.title}</h1>
            <h2 className="text-muted-foreground relative mx-auto text-sm -mt-2">{formattedDate}</h2>
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
            <NextPrevious />
        </div>
    )
}