import MobileBar from "./MobileBar";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NavSections from "../utils/NavSections";

function NavBar() {
  const params = useParams();
  console.log(params.id);
  return (
    <header className="relative flex justify-center py-4 ">
      <div className="hidden lg:flex container px-8  justify-center space-x-52 2xl:space-x-96 items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="text-2xl md:text-3xl font-semibold"
        >
          Hindi Pasta
        </motion.h1>
        <nav className="hidden md:flex space-x-6 text-[17px]">
          <NavSections text="Home" url="/" />
          <NavSections text="Category" url="/category" />
          <NavSections text="Contact" url="/contact" />
          <NavSections text="About Us" url="/about" />
        </nav>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="flex space-x-2 text-transparent"
        >
         aawda
        </motion.p>
      </div>
      <MobileBar />
    </header>
  );
}

export default NavBar;
