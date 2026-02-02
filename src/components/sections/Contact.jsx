import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs, { sendForm } from "@emailjs/browser";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

   

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        }).catch((error) => {
            alert("Failed to send the message, please try again");
        });
    };



    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className=" px-4 w-100 md:w-150">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="Name"
                                onChange={(e)=> setFormData({...formData, name: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                placeholder="example@gmail.com"
                                onChange={(e)=> setFormData({...formData, email: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                type="message"
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                placeholder="Your Message"
                                onChange={(e)=> setFormData({...formData, message: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition hover:translate-y-1 font-semibold"
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
