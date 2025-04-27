export const PROJECTS_QUERY = `*[
    _type == "project" && defined(slug.current)
]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    description,
    techStack,
    thumbnail,
    githubUrl,
    projectUrl
}`