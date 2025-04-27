import { getProjects } from "@/lib/getProjects";
import { Suspense } from "react";
import { ProjectCard } from "./project-card";

export default async function Projects() {
    const projects = await getProjects()

    return (
        <div className="grid md:grid-cols-3 gap-2.5">
            {projects.map((project) => (
                <Suspense key={project._id} fallback={<p>loading...</p>}>
                    <ProjectCard project={project} />
                </Suspense>
            ))}
        </div>
    )
}