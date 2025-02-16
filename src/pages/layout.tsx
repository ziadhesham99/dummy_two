import NavBar from "../components/navBar.tsx";
import {Outlet} from "react-router";
import Footer from "../components/footer.tsx";
import { motion } from "framer-motion";
export default function Layout(){
    return <div className={`h-auto text-lg bg-bg`}>
        <motion.div
            className="z-20 absolute top-[-30%] left-[-20%] w-[70%] h-[80%] bg-gradient-to-br from-yellow-400 via-orange-300 to-transparent opacity-20 blur-[100px] rotate-45 pointer-events-none"
            initial={{opacity: 0.10}}
            animate={{opacity: 0.30}}
            transition={{duration: 3, repeat: Infinity, repeatType: "reverse"}}
        />
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
}