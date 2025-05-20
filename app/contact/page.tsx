import Link from "next/link";

export default function Contact() {
    return (
        <div className="p-8 md:p-16 md:px-8 flex flex-col space-y-4 w-full min-h-screen">
            <div>
                <Link href={"https://github.com/aromibenard"} className="text-primary font-medium transition-colors hover:text-primary">
                    GitHub
                </Link>
            </div>
            <div>
                Email: aromibenard@gmail.com
            </div>
            <div>
                0792775784
            </div>
        </div>
    )
}