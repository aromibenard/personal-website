import { getProjects } from "@/lib/getProjects";
import { truncateDescription, truncatePortableText, urlFor } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";


export const ProjectCard = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const projects = await getProjects()

    return (
        <>
            {projects.map(project => {
                const projectImageUrl = urlFor(project.thumbnail).url()
                return (
                    <div key={project._id} className="border rounded-md shadow">
                        <div className="relative h-48">
                            {projectImageUrl && 
                                <Image
                                    src={projectImageUrl}
                                    alt={project.title}
                                    fill={true }
                                    className="rounded-tl-md rounded-tr-md"
                                />
                            }
                        </div>
                        <h2 className="text-xl font-semibold my-2 px-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700 drop-shadow-md">{project.title}</h2>
                        {typeof project.description === "string" ? (
                            <p className="px-2">{truncateDescription(project.description, 35)}</p>
                        ) : (
                            <div className="px-2">
                                <PortableText value={truncatePortableText(project.description, 35)}/>
                            </div>
                        )}
                        <div className="px-2">
                            <Link href={`/projects/${project.slug.current}`} className={`${buttonVariants({ variant: 'secondary'})} w-full my-2 px-2`} >
                                View Project
                            </Link>
                        </div>
                        <div className="flex justify-between items-center mt-4 mb-2 px-2 text-sm">
                            {project.projectUrl && (
                                <Link href={project.projectUrl} target="_blank" className="text-muted-foreground hover:text-purple-600 transition-colors hover:underline">
                                    <span className="flex items-center space-x-1"><p>production</p><ExternalLink /></span>
                                </Link>
                            )}
                            {project.githubUrl && (
                                <Link href={project.githubUrl} target="_blank" className="text-muted-foreground hover:text-purple-600 transition-colors hover:underline">
                                    <Github />
                                </Link>
                            )}
                        </div>
                    </div>
                )
            })}
        </>
    );
}