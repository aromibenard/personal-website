import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Greeting from "./greeting";

export default function Grid() {
    return (
        <div className="p-2 flex flex-col my-4 w-full h-3/4">
            <div className="px-6 grid grid-cols-4 h-1/6">
                <div className="border-l border-dashed col-span-1"></div>
                <div className="col-span-2 border-r border-l border-dashed"></div>
                <div className="border-r border-dashed col-span-1"></div>
            </div>
            <div className="h-1/6 px-6 border-t  border-b border-dashed">
                <div className="border-l h-full border-dashed border-r p-2 flex items-center">
                    <h1 className="relative mx-auto text-xl md:text-3xl font-extrabold text-center">Building thoughtful software — clean, purposeful, built to last</h1>
                </div>
            </div>
            <div className="h-2/6 px-6">
                <div className="border-l h-full border-dashed border-r flex flex-col justify-center p-2">
                    <Greeting />
                    <h2 className="relative mx-auto text-center">
                        I&apos;m a software developer focused on building <span className="font-semibold">full-stack applications</span> that are clear, functional, and <span className="font-semibold">genuinely useful</span>. Every project is a balance of thoughtful design, clean code, and long-term vision. 
                    </h2>
                </div>
            </div>
            <div className="h-1/6 border-b border-dashed border-t px-6 grid grid-cols-4 ">
                <div className="border-l border-dashed col-span-1"></div>
                <div className="col-span-2 border-r border-l border-dashed flex items-center">
                    <div className="relative mx-auto flex space-x-3">
                        <Link 
                            href={'/projects'}
                            className={buttonVariants({ variant: 'default'})}
                        >
                            Projects
                        </Link>
                        <Link 
                            href={'/contact'}
                            className={buttonVariants({ variant: 'outline'})}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="border-r border-dashed col-span-1"></div>
            </div>
            <div className="px-6 grid grid-cols-4 h-1/6">
                <div className="border-l border-dashed col-span-1"></div>
                <div className="col-span-2 border-r border-l border-dashed"></div>
                <div className="border-r border-dashed col-span-1"></div>
            </div>
        </div>
    )
}