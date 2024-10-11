import { motion } from "framer-motion";

function Service() {
  return (
    <section className=" mt-24">
      <div
        className=" max-lg:container max-lg:px-6 xl:px-12 mx-auto flex flex-col-reverse  justify-around
         justify-end items-center xl:flex-row "
      >
        <motion.div
          initial={{ opacity: 0, x: -7 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className=" flex flex-col space-y-6 2xl:pl-36 xl:pl-12"
        >
          <h2 className=" relative w-[150px] half-line uppercase text-primary">
            cakes pleasure
          </h2>
          <h1 className=" uppercase text-[42px]  max-w-[410px] leading-[50px] tracking-wide">
            We offer real pleasure
          </h1>
          <p className="flex space-x-12 items-center">
            <i className="ri-cake-line text-4xl text-primary bg-slate-200 p-3 rounded-[90%]"></i>
            <p>
              <h1 className="text-4xl text-primary font-semibold">
                Custom Designs
              </h1>
              <h4 className="text-[#969696] text-[16px] 2xl:max-w-[400px]">
                {" "}
                We use only natural ingredients from international producers and
                high-quality dyes.
              </h4>
            </p>
          </p>
          <p className="flex space-x-12 items-center">
            <i className="ri-cake-3-line text-4xl text-primary bg-slate-200 p-3 rounded-[90%]"></i>
            <p>
              <h1 className="text-4xl text-primary font-semibold">
                Exquisite Tastes
              </h1>
              <h4 className="text-[#969696] text-[16px] 2xl:max-w-[400px]">
                We work with dark, white and milk chocolate from the best
                Belgian and French producers.
              </h4>
            </p>
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 7 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          src="/hight.png"
          alt="ice-creams"
          className="2xl:w-[850px] w-[650px]  px-4  "
        />
      </div>
    </section>
  );
}

export default Service;
