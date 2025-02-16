import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-sbg text-muted py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Intro */}
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-serif text-2xl font-bold text-primary">Aurora Café</h2>
                        <p>
                            Experience the finest coffee and a warm ambiance, crafted just for you.
                        </p>
                    </div>


                    <div className="flex flex-col space-y-2">
                        <h3 className="font-serif text-lg font-semibold text-secondary">Quick Links</h3>
                        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/" className=" hover:text-hover transition">Home</Link>
                        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/about" className=" hover:text-hover transition">About</Link>
                        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/menu" className=" hover:text-hover transition">Menu</Link>
                        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/contact" className=" hover:text-hover transition">Contact</Link>
                    </div>


                    <div className="flex flex-col space-y-2">
                        <h3 className="font-serif text-lg font-semibold text-secondary">Get in Touch</h3>
                        <p>📍 12 Roastery St, Cairo, Egypt</p>
                        <p>📞 +20 192 345 6789</p>
                        <p>📧 hello@auroracafe.com</p>
                    </div>
                </div>

                <div className="border-t border-primary mt-8 pt-4 text-center text-secondary text-sm">
                    © {new Date().getFullYear()} Aurora Café. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
