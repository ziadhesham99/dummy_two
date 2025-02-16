import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`z-20 fixed w-full top-0 left-0 transition-all duration-300 flex items-center px-6 md:px-10 lg:px-14 ${
                scrolled ? "bg-bg p-3 shadow-lg" : "bg-transparent p-6"
            }`}
        >

            <div className="font-serif font-semibold text-3xl lg:text-4xl text-primary">
                Aurora Café
            </div>


            <div className="ml-auto flex gap-4 lg:gap-6 text-secondary">
                <Link className="hover:text-hover transition" to="/">Home</Link>
                <Link className="hover:text-hover transition" to="/about">About</Link>
                <Link className="hover:text-hover transition" to="/menu">Menu</Link>
                <Link className="hover:text-hover transition" to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
