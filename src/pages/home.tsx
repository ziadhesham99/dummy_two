import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMugHot, FaLeaf, FaCookieBite } from "react-icons/fa";

export default function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const [text, setText] = useState("");

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const words = "Welcome to Aurora Café";
        let index = 0;
        const interval = setInterval(() => {
            setText(words.slice(0, index));
            index++;
            if (index > words.length) clearInterval(interval);
        }, 100);
    }, []);

    return (
        <div className="font-serif bg-bg text-muted">

            <div className="relative h-screen">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1533052286801-2385cb274342?w=1920&q=80&auto=format&fit=crop"
                        className="w-full h-full object-cover"
                        alt="Aurora Café"
                        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
                </div>
                <div className="relative flex flex-col justify-center items-center h-full px-6 text-center">
                    <h1 className="text-secondary text-5xl md:text-6xl font-bold drop-shadow-lg">
                        {text}
                    </h1>
                    <p className="text-lg  mt-4 max-w-xl animate-fade-in delay-300">
                        A cozy space where every sip feels like home ☕✨
                    </p>
                    <Link to="/menu">
                        <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-accent rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-hover">
                            View Menu
                        </button>
                    </Link>
                </div>
            </div>

            {/* ✅ Why Choose Us Section */}
            <div className=" py-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold ">
                        Why <span className="text-primary">Aurora Café?</span>
                    </h2>
                    <p className="text-muted mt-4 text-lg">
                        Experience the warmth of handcrafted coffee, organic ingredients, and a place that feels like home.
                    </p>
                </motion.div>


                <div className=" mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[{
                        icon: <FaMugHot className="text-yellow-500 text-5xl mx-auto mb-4" />,
                        title: "Artisan Coffee",
                        description: "Enjoy handcrafted coffee blends made with passion and precision."
                    }, {
                        icon: <FaLeaf className="text-green-600 text-5xl mx-auto mb-4" />,
                        title: "Organic & Fresh",
                        description: "We use the freshest, organic ingredients for a healthier you."
                    }, {
                        icon: <FaCookieBite className="text-yellow-500 text-5xl mx-auto mb-4" />,
                        title: "Homemade Treats",
                        description: "Baked fresh daily—delicious pastries that warm the heart."
                    }].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-sbg p-6 rounded-lg shadow-md text-center transition-all duration-300"
                        >
                            {item.icon}
                            <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                            <p className="text-muted mt-2">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className=" py-16 px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-primary"
                >
                    Featured Menu
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                    {[{name:"Cappuccino",img:"https://images.unsplash.com/photo-1511723991310-0e859b96b2e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fENhcHB1Y2Npbm98ZW58MHx8MHx8fDA%3D"},
                        {name:"Espresso ",img:"https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEVzcHJlc3NvfGVufDB8fDB8fHww"},
                        {name:"Mocha ",img:"https://images.unsplash.com/photo-1618576230663-9714aecfb99a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9jaGF8ZW58MHx8MHx8fDA%3D"},
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-sbg p-6 rounded-lg shadow-lg"
                        >
                            <img src={`${item.img}`} alt={item.name} className="w-full h-40 object-cover rounded-lg"/>
                            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                        </motion.div>
                    ))}
                </div>
                <Link to="/menu" className="  mt-6 inline-block px-6 py-3 bg-accent text-white text-lg rounded-lg shadow-lg hover:bg-hover transition">
                    See Full Menu
                </Link>
            </div>
        </div>
    );
}
