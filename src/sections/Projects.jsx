import { RevealOnScroll } from "../components/RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                {" "}
                                Converso - AI LMS Platform
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A NextJS Powered LMS SaaS App featuring user
                                authentication, subscriptions, and payments
                                using Next.js, Supabase, and Stripe — also
                                integrates Vapi AI voice agent for seamless,
                                interactive learning sessions.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "Next.js",
                                    "TailwindCSS",
                                    "Vapi",
                                    "Typescript",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="http://converso-beta.vercel.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                VibeStyle - ECommerce Platform
                            </h3>
                            <p className="text-gray-400 mb-4">
                                An E-commerce website created using NextJS 15,
                                TailwindCSS, Sanity CMS and Stripe for seamless
                                payment
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "Next.js",
                                    "TailwindCSS",
                                    "Sanity CMS",
                                    "Stripe",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="http://vibestyle.vercel.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Credit Card Fraud Detector App
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Loads your trained fraud_model.pkl and
                                scaler.pkl Lets the user input 30 features (like
                                a new transaction) Predicts Fraud or Not Fraud
                                Super clean, quick, and interactive
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Streamlit", "API's", "OpenAI"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://creditcardfrauddetector454.streamlit.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Cocktails - Menu Platform
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A Cocktails Shop made with React, TailwindCSS
                                and GSAP
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "GSAP", "TailwindCSS"].map(
                                    (tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="http://velvet-pour-eight.vercel.app"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
