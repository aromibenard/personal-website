import { POST_QUERY } from "@/queries/project-query"
import { client } from "@/sanity/lib/client"
import { SanityDocument } from "next-sanity"

export default async function Page({
    params,
} : {
    params: Promise<{ slug: string }>
}) {
    const project = await client.fetch<SanityDocument>(POST_QUERY, await params)

    return (
        <div className="p-8 md:p-14 md:px-8 flex flex-col space-y-4 w-full min-h-screen">
            {project.title}
        </div>
    )
}