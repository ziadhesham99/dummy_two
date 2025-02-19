import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="font-serif bg-bg text-muted">
            {/* Parallax Background */}
            <div className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7')" }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl text-secondary font-bold bg-black/40 px-6 py-2 rounded-md">
                    Contact Us
                </motion.h1>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-primary mb-6">📬 Get in Touch</h2>
                <p className="text-lg mb-8">
                    Have a question, feedback, or just want to say hi? Fill out the form below or reach out using the details provided.
                </p>

                <form className="bg-sbg p-8 rounded-lg shadow-lg">
                    <label className="block text-lg text-primary mb-2">Your Name</label>
                    <input type="text" placeholder="John Doe"
                           className="w-full p-3 mb-4 rounded border border-formBorder focus:outline-none focus:ring-2 focus:ring-formText_Focus"/>

                    <label className="block text-lg text-primary mb-2">Your Email</label>
                    <input type="email" placeholder="john@example.com"
                           className="w-full p-3 mb-4 rounded border border-formBorder focus:outline-none focus:ring-2 focus:ring-formText_Focus"/>

                    <label className="block text-lg text-primary mb-2">Your Message</label>
                    <textarea placeholder="Write your message here..." rows={4}
                              className="w-full p-3 mb-4 rounded border border-formBorder focus:outline-none focus:ring-2 focus:ring-formText_Focus"></textarea>

                    <button type="submit"
                            className="w-full bg-btn hover:bg-btnHover text-btnText font-semibold py-3 rounded shadow-md transition">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-primary mb-6">📍 Visit Us</h2>
                <p className="text-lg mb-4">We’d love to welcome you to our café. Here’s how you can find us:</p>

                <div className="bg-sbg p-6 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold text-primary">📍 Address:</p>
                    <p className="text-secondary">123 Coffee Street, Cairo, Egypt</p>

                    <p className="mt-4 text-xl font-semibold text-primary">📞 Phone:</p>
                    <p className="text-secondary">+20 192 345 6789</p>

                    <p className="mt-4 text-xl font-semibold text-primary">📧 Email:</p>
                    <p className="text-secondary">contact@auroracafe.com</p>
                </div>
            </div>
        </div>
    );
}
