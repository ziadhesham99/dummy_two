import { motion } from "framer-motion";

const drinks = [
    { name: "Cappuccino", price: "50 EGP", img: "https://images.unsplash.com/photo-1511723991310-0e859b96b2e2?w=500" },
    { name: "Espresso", price: "40 EGP", img: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500" },
    { name: "Mocha", price: "55 EGP", img: "https://images.unsplash.com/photo-1618576230663-9714aecfb99a?w=500" },
    { name: "Latte", price: "50 EGP", img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF0dGV8ZW58MHx8MHx8fDA%3D" },
    { name: "Caramel Macchiato", price: "60 EGP", img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyYW1lbCUyMG1hY2NoaWF0b3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Iced Americano", price: "45 EGP", img: "https://images.unsplash.com/photo-1581996323441-538096e854b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlZCUyMGFtZXJpY2Fub3xlbnwwfHwwfHx8MA%3D%3D" },
];

const pastries = [
    { name: "Croissant", price: "35 EGP", img: "https://images.unsplash.com/photo-1596554928189-05ea9bfffe3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNyb2lzc2FudHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Blueberry Muffin", price: "30 EGP", img: "https://images.unsplash.com/photo-1601390387542-22acd08d6029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJsdWViZXJyeSUyMG11ZmZpbnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Molten Cake", price: "70 EGP", img: "https://media.istockphoto.com/id/182795659/photo/molten-cake-explosion.webp?a=1&b=1&s=612x612&w=0&k=20&c=6q8nDo-bCTKRrPevUgvqvdbQjQsmEBJA760ZHwdQKAs=" },
];

export default function Menu() {
    return (
        <div className="font-serif bg-bg text-muted">
            <div className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')" }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl text-secondary font-bold bg-black/40 px-6 py-2 rounded-md">
                    Our Menu
                </motion.h1>
            </div>

            {/* Drinks Section */}
            <div className="max-w-6xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-primary mb-6">☕ Drinks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {drinks.map((item, index) => (
                        <div key={index} className="bg-sbg p-6 rounded-lg shadow-lg hover:scale-105 transition">
                            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg"/>
                            <div className="flex justify-between mt-4">
                                <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                                <p className="text-secondary">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pastries Section */}
            <div className="max-w-6xl mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-primary mb-6">🥐 Pastries</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastries.map((item, index) => (
                        <div key={index} className="bg-sbg p-6 rounded-lg shadow-lg hover:scale-105 transition">
                            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg"/>
                            <div className="flex justify-between mt-4">
                                <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                                <p className="text-secondary">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
