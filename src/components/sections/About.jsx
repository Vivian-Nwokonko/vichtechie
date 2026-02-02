import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'];
    const backendSkills = ['Python', 'Django', 'PHP', 'SQL', 'MongoDB'];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            {/* About Me Section */}
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    About Me
                </h1>

                {/* Introduction */}
                <div className="rounded-xl p-8 border-white/10 border hover:translate-y-2 transition-all">
                    <p className="text-gray-300 mb-6  text-center">I’m a web developer who is passionate about building modern, responsive, and user-friendly web applications. I enjoy working on both frontend interfaces and backend systems, turning ideas into seamless digital experiences. With a focus on clean code, scalable architecture, and modern technologies like React, Python, and Tailwind CSS, I strive to create applications that are both functional and visually engaging. I’m always exploring new tools and techniques to make better, faster, and more interactive web experiences.</p>

                    {/*Skills start*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Front end skils */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>


                        {/* Backend skils */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* skills end */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                        <h3 className=" text-xl font-bold mb-4">📘Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Certification in Web Development </strong>
                                - Aptech Computer Education, Owerri, Nigeria (2023 - 2025)
                            </li>
                            <li>
                                <strong>MSc. in Biochemistry </strong>
                                - University of Port Harcourt, Nigeria (2016 - 2018)
                            </li>

                            <li>
                                <strong>BSc. in Biochemistry </strong>
                                - University of Port Harcourt, Nigeria (2009 - 2014)
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                        <h3 className=" text-xl font-bold mb-4">💻 Work Experience</h3>
                        <div className=" space-y-4  text-gray-300 ">
                            <div>
                                <h4 className="font-semibold">Web Developer |Freelancer  (2026 - Present) </h4>
                                <p>Designed, developed, and maintained responsive websites and web applications</p>
                            </div>
                            <div>
                                <h4>Web Developer |Trainee - Aptech Computer Education  (2023 - 2025) </h4>
                                <p>Participated in planning and structuring web projects</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </RevealOnScroll>
        </section>
    );
};
