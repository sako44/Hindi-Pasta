import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.img
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      src="/hindi.png"
      alt="Hindi"
      className="w-[80%]  md:-mt-[100px]  xl:md:-mt-[300px] 2xl:-mt-[530px]
      -mb-[70px] md:-mb-[250px]  xl:md:-mb-[300px] 2xl:-mb-[550px]
      mx-auto px-2"
    />
  );
}

export default Logo;
