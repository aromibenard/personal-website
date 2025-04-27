import { client } from "@/sanity/lib/client";
import { Project } from "@/types/project";
import  ImageUrlBuilder  from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: Project
}

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) => 
    projectId && dataset ? ImageUrlBuilder({ projectId, dataset}).image(source) : null

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const projectImageUrl = project.thumbnail ? urlFor(project.thumbnail)?.width(550).height(310).url() : null
    return (
        <div className="border rounded-md shadow">
            <div className="relative h-48">
                {projectImageUrl && 
                    <Image
                        src={projectImageUrl}
                        alt={project.title}
                        objectFit="cover"
                        height={310}
                        width={550}
                        className="rounded-md"
                    />
                }
            </div>
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            {typeof project.description === "string" ? (
                <p>{project.description}</p>
            ) : (
                <PortableText value={project.description} />
            )}
            <div className="flex justify-between items-center mt-4">
                {project.projectUrl && (
                    <Link href={project.projectUrl} target="_blank" className="text-gray-700">
                        View Project
                    </Link>
                )}
                {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" className="text-gray-700">
                        GitHub
                    </Link>
                )}
            </div>
        </div>
    );
}