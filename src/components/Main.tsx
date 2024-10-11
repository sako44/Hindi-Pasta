import { motion } from "framer-motion";

function Main() {
  return (
    <section className="mt-12">
      <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="px-5 grid grid-cols-1 gap-7 lg:grid-cols-2 2xl:grid-cols-4 ">
        <p className="bg-1 h-[500px] flex justify-center items-end ">
          <span className="pb-12 text-4xl text-white font-semibold">
            Chocolate Cakes
          </span>
        </p>
        <p className="bg-2 h-[500px] md:max-lg:bg-center flex justify-center items-end 2xl:mt-4">
          <span className="pb-12 text-4xl text-white font-semibold">
            Cakes with Fruits{" "}
          </span>
        </p>
        <p className="bg-3 h-[500px] flex justify-center items-end ">
          <span className="pb-12 text-4xl text-white font-semibold">
            Coffe Cakes
          </span>
        </p>
        <p className="bg-4 h-[500px] flex justify-center items-end 2xl:mt-4">
          <span className="pb-12 text-4xl text-white font-semibold">
            Carrot Cake
          </span>
        </p>
      </motion.div>
    </section>
  );
}

export default Main;
