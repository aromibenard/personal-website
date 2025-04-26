import { ModeToggle } from "./mode-toggle";

export default function NavBar() {
    return (
        <div className="flex items-center justify-around p-2 shadow-sm fixed top-0 z-50 px-4 w-full dark:border-b opacity-85 backdrop-blur-sm">
            <p>navbar</p>
            <div className="relative">
                <ModeToggle />
            </div>
        </div>
    )
}