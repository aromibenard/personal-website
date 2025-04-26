import BreadCrumbs from "@/components/bread-crumbs";

export default function Page() {
    return (
        <div className="p-8 md:p-14 md:px-8 flex flex-col space-y-4 w-full min-h-screen">
            <BreadCrumbs />
        </div>
    )
}