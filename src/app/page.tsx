// Homepage

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen px-64 py-40">
            <main className="h-full w-full">
                <header>
                    <div>
                        <p>hey, i&#39;m</p>
                        <h1 className="relative font-bold text-6xl leading-20">
                            <span className="absolute inset-0 blur-xs">justin abuyuan.</span>
                            <span className="relative z-10">justin abuyuan.</span>
                        </h1>
                    </div>

                    <h2 className="text-xl leading-10">software engineering @ uwaterloo</h2>
                    <p className="text-gray-400">i like to code stuff and build things for the internet.</p>
                </header>
            </main>
        </div>
    );
}
