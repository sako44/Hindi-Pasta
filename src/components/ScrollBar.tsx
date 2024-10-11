import { motion } from "framer-motion";

function ScrollBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="w-full text-[#2195f327] font-light mt-14 -mb-16 xl:-mb-[74px] "
    >
      <div className="border border-transparent flex overflow-hidden items-center whitespace-nowrap md:text-md">
        <div className=" inline-block  animate-slide  py-3 uppercase">
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            Ice cream
          </h1>
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            cakes
          </h1>
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            sweets
          </h1>
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            pastries
          </h1>
        </div>
        <div className=" inline-block  animate-slide  py-3 uppercase">
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            Ice cream
          </h1>
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            cakes
          </h1>
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            sweets
          </h1>
          <h1 className="inline-block  mx-[50px] md:mx-12 text-7xl md:text-8xl 2xl:text-9xl">
            pastries
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export default ScrollBar;
