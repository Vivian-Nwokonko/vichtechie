import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        {/* Project Section */}
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 text-center bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Feautured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project 1 */}
                <div className="rounded-xl p-6 border-white/10 border hover:translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Hospital Management System</h3>
                        <p className="text-gray-400 mb-4">A web application that automates hospital operations like patient records, appointments, billing, and staff management, making healthcare services more efficient and organized.</p>

                        <div>
                            {['HTML', 'CSS', 'JavaScript', 'Bootstrap'].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://alicememorialhospital.netlify.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="rounded-xl p-6 border-white/10 border hover:translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Automobile Website</h3>
                        <p className="text-gray-400 mb-4"> An automobile e-commerce platform built to deliver a smooth and reliable online car
                            accesories shopping
                            experience.</p>

                        <div>
                            {['HTML', 'CSS', 'JavaScript', 'Bootstrap'].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://simelng.netlify.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="rounded-xl p-6 border-white/10 border hover:translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Portfolio Website</h3>
                        <p className="text-gray-400 mb-4"> A personal portfolio website built to perfection to showcase projects and skills.</p>

                        <div>
                            {['HTML', 'JavaScript', 'Tailwind CSS'].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://portvn.netlify.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}

                <div className="rounded-xl p-6 border-white/10 border hover:translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Logistics Website</h3>
                        <p className="text-gray-400 mb-4"> A logistics company website built to streamline operations and enhance customer experience.</p>

                        <div>
                            {['HTML', 'CSS', 'JavaScript', 'Bootstrap'].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://jblogistics.netlify.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>
                </div>




            </div>
        </div>
        </RevealOnScroll>

    </section>
};
