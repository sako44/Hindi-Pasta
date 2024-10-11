import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

type NavProps = {
  text: string;
  url: string;
};

function NavSections({ text, url }: NavProps) {
  return (
    <NavLink
      to={url}
      className="overflow-hidden relative one-line text-lg lg:text-lg md:max-xl:px-0  border-b-2 border-transparent py-3 px-3
      hover:text-[#2196f3] transition duration-500 ease-in-out"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        {text}
      </motion.h1>
    </NavLink>
  );
}

export default NavSections;
