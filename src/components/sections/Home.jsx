import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Vivian Nwokonko
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">I am a web developer who designs and develops modern web experiences that are clean, scalable, and built to perform.</p>
                <div className="flex justify-center space-x-4">
                    
                    <a href="#projects" className=" relative overflow-hidden
    bg-blue-500 text-white py-3 px-6 rounded font-medium
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
    before:absolute before:inset-0
    before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent
    before:-translate-x-full before:transition-transform before:duration-700
    hover:before:translate-x-full">
                        View Projects
                    </a>
                  
                    <a href="#contact" className="relative inline-flex items-center
    px-6 py-3 rounded-md font-medium
    text-blue-500
    bg-white/5 backdrop-blur-sm
    border border-blue-500/30
    transition-all duration-300 ease-out
    hover:bg-blue-500/10
    hover:border-blue-500/60
    hover:-translate-y-0.5
    hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)]
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                        Contact
                    </a>




                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
