import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="font-serif bg-bg text-muted">
            {/* Parallax Background */}
            <div className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510972527921-ce03766a1cf1')" }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl text-secondary font-bold bg-black/40 px-6 py-2 rounded-md">
                    Our Story
                </motion.h1>
            </div>

            {/* Story Section */}
            <div className="max-w-5xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-primary mb-6">☕ Crafted with Passion</h2>
                <p className="text-lg leading-relaxed">
                    Welcome to <span className="text-secondary font-semibold">Aurora Café</span>, a space where coffee is an art, and every sip is a story. Our café was born from a deep love for the craft of coffee-making and a mission to create a place where people can escape the rush of daily life.
                </p>
                <p className="mt-4 text-lg">
                    We carefully source the finest organic beans, roast them with precision, and serve them with heart. Every drink, pastry, and smile at our café is a part of a greater experience—one that feels like home.
                </p>
            </div>

            {/* Meet the Team */}
            <div className="max-w-5xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-primary mb-6">👨‍🍳 Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-sbg p-6 rounded-lg shadow-lg text-center">
                        <img src="https://images.generated.photos/9m3aI52MEQtXTgiSrCI-ga-1p98MeLXRz5QF_6UiVRA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODUxNDUwLmpwZw.jpg" alt="Barista" className="w-32 h-32 rounded-full mx-auto"/>
                        <h3 className="text-xl font-semibold mt-4 text-primary">Alex Johnson</h3>
                        <p className="text-muted">Head Barista</p>
                    </div>
                    <div className="bg-sbg p-6 rounded-lg shadow-lg text-center">
                        <img src="https://images.generated.photos/ocBLGyWS8AgBBHjnD-RVJCl2egpw1x69btLpZ-AIK9I/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjgyMjI2LmpwZw.jpg" alt="Chef" className="w-32 h-32 rounded-full mx-auto"/>
                        <h3 className="text-xl font-semibold mt-4 text-primary">Sophia Martinez</h3>
                        <p className="text-muted">Pastry Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
