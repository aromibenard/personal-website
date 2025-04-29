import { Suspense } from "react";
import { ProjectCard } from "./project-card";
import { Skeleton } from "./ui/skeleton";

export default async function Projects() {

    return (
        <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
            <Suspense fallback={<ProjectsSkeleton />}>
                <ProjectCard />
            </Suspense>
        </div>
    )
}

const ProjectsSkeleton = () => {
    return (
        <div className="grid md:grid-cols-3 gap-3 lg:gap-4 md:w-[610.53px] md:h-[530px] lg:h-[458px] lg:w-[1109.53px] w-full" >
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )
}