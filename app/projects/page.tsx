import BreadCrumbs from "@/components/bread-crumbs";
import NextPrevious from "@/components/next-previous";
import Projects from "@/components/projects";

// const options = { next: { revalidate: 30 }}


export default async function Page() {
    return (
        <div className="p-8 md:p-16 md:px-8 flex flex-col space-y-4 w-full min-h-screen">
            <BreadCrumbs />
            <Projects />
            <NextPrevious />
        </div>
    )
}