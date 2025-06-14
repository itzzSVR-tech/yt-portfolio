import { RevealOnScroll } from "../components/RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "React",
        "Next.js",
        "Vue",
        "TypeScript",
        "TailwindCSS",
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "Express",
        "Supabase",
        "PostgreSQL",
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate Full Stack Developer dedicated to
                            building robust, scalable, and user-friendly web
                            applications. With a strong foundation in both
                            frontend and backend technologies, I specialize in
                            creating seamless digital experiences that solve
                            real-world problems. Whether it's crafting
                            responsive interfaces or developing powerful backend
                            systems, I enjoy turning ideas into impactful
                            solutions. I'm always eager to learn, collaborate,
                            and push the boundaries of what technology can
                            achieve.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    {" "}
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    {" "}
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                {" "}
                                🏫 Education{" "}
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>
                                        {" "}
                                        B.Tech. in Computer Science{" "}
                                    </strong>{" "}
                                    - SRM University (2023-(Present)-2027)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web
                                    Development, Cloud Computing...
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                {" "}
                                💼 Work Experience{" "}
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li className="font-semibold">
                                        {" "}
                                        Student Intern at Compassion AI | LLC
                                        (Feb 2025-Present){" "}
                                    </li>
                                    <p>
                                        Developed and maintained microservices
                                        for cloud-based applications.
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
