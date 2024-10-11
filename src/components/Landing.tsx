import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <section className="w-full h-[700px] ">
        <div
          className="background max-lg:bg-bottom w-full h-full flex flex-col
        justify-start items-center xl:items-center "
        >
          <p className="flex flex-col space-y-4 justify-center items-center mt-8 lg:mt-16">
            <motion.img
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
              src="public/logo_home2.png"
              className="ri-cake-3-line w-28"
            ></motion.img>
            <motion.h1
              initial={{ opacity: 0, x: -7 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl  tracking-[5px] lg:tracking-[7px] 2xl:tracking-[15px] text-center text-white uppercase"
            >
              more than cakes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 7 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className=" w-[50%] sm:w-fit text-center text-lg lg:text-xl
               line relative text-whit uppercase mt-5"
            >
              The best pasta in the world
            </motion.p>
            <Link to="/category">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: "spring" }}
                className=" uppercase text-primary font-semibold bg-white py-3 px-10 rounded-sm
            hover:bg-primary hover:text-white transition duration-500 ease-in-out"
              >
                Learn More
              </motion.button>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Landing;
