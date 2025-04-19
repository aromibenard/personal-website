import { ModeToggle } from "./mode-toggle";

export default function NavBar() {
    return (
        <div className="flex items-center justify-around p-2 shadow-md fixed top-0 z-50 px-4 w-full">
            <p>hello</p>
            <div className="relative">
                <ModeToggle />
            </div>
        </div>
    )
}