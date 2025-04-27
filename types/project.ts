export interface Project {
    _id: string
    title: string
    slug: { current: string }
    publishedAt: string
    description: string
    techStack?: string[]
    thumbnail: { asset: { url: string }}
    githubUrl?: string
    projectUrl?: string
}