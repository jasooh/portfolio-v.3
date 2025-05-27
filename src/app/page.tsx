// homepage

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen px-42 py-40">
            <main className="h-full w-full flex gap-10 flex-col">
                <header>
                    <p>hey, i&#39;m</p>
                    <div>
                        <h1 className="relative font-bold text-6xl leading-20 tracking-wide">
                            <span className="absolute inset-0 blur-xs">justin abuyuan.</span>
                            <span className="relative z-10">justin abuyuan.</span>
                        </h1>
                    </div>
                    <h2 className="text-xl leading-10">software engineering @ uwaterloo</h2>
                    <p className="text-gray-400">i like to code stuff and build things that solve problems.</p>
                </header>

                {/* Social buttons */}
                <section className="flex flex-row gap-4">
                    <FaGithub className="size-10" />
                    <FaLinkedin className="size-10" />
                    <IoDocumentOutline className="size-10" />
                </section>
            </main>
        </div>
    );
}
