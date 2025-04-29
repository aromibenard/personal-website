import BreadCrumbs from "@/components/bread-crumbs";
import React from "react";

export default function ProjectPageLayout({ 
    children } : { children: React.ReactNode }) {
        return (
            <main className=" p-8 md:p-14 md:px-8 max-h-screen w-full">
                <BreadCrumbs />
                {children}
            </main>
        )
} 