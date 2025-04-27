import { Project } from "@/types/project";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="border rounded-md shadow">
            <div className="relative h-48">
                <Image
                    src={project.thumbnail.asset.url}
                    alt={project.title}
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
                <PortableText value={project.description} />
            <div className="flex justify-between items-center mt-4">
                {project.projectUrl && (
                    <Link href={project.projectUrl}>
                        <a target="_blank" className="text-gray-700">View Project</a>
                    </Link>
                )}
                {project.githubUrl && (
                    <Link href={project.githubUrl}>
                        <a target="_blank" className="text-gray-700">GitHub</a>
                    </Link>
                )}
            </div>
        </div>
    )
}