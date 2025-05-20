import SideBarLinks from "./side-bar-links"

export default function SideBar() {
    return (
        <div className="border-r  p-4 px-2 md:p-14 md:px-2 hidden md:block">
            <SideBarLinks />
        </div>
    )
}