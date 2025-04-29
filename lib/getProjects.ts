import { PROJECTS_QUERY } from "@/queries/projects-query";
import { client } from "@/sanity/lib/client";
import { Project } from "@/types/project";

export const getProjects = async (): Promise<Project[]> => {
    const projects = await client.fetch(PROJECTS_QUERY, {}, { next: { revalidate: 60 }})
    return projects
}