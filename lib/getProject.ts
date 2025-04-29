import { PROJECT_QUERY } from "@/queries/project-query";
import { client } from "@/sanity/lib/client";
import { Project } from "@/types/project";

export const getProject = async (): Promise<Project> => {
    const projects = await client.fetch(PROJECT_QUERY, {}, { next: { revalidate: 60 }})
    return projects
}