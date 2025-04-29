import { Suspense } from "react";
import { ProjectCard } from "./project-card";

export default async function Projects() {

    return (
        <div className="grid md:grid-cols-3 gap-4">
            <Suspense fallback={<p>loading...</p>}>
                <ProjectCard />
            </Suspense>
        </div>
    )
}