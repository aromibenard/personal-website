
export const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`