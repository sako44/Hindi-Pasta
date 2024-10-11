import {motion} from 'framer-motion';
function Service() {
  return (
    <section className="mt-24">
      <div
        className="container mx-auto flex flex-col px-6 lg:max-xl:px-[138px]
       justify-center items-center xl:flex-row xl:space-x-44 "
      >
        <motion.img
        initial={{ opacity: 0, x: -7 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring" }}
          src="public/ice.png"
          alt="ice-creams"
          className="2xl:w-[750px] w-[650px]"
        />
        <motion.div
         initial={{ opacity: 0, x: 7 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 2, type: "spring" }}
        className="flex flex-col space-y-6">
          <h2 className=" relative w-fit half-line uppercase text-primary">
            About Our Company
          </h2>
          <h1 className=" uppercase text-[42px]  max-w-[440px] leading-[50px] tracking-wide">
            incredible tastes of ice creams
          </h1>
          <p className="text-xl font-light text-[#969696]">
            We serve the finest natural ice cream made from fresh, hand-picked
            fruits. Our ice cream is a blend of rich, creamy textures and
            vibrant, fruity flavors, offering a taste of nature in every scoop.
          </p>

          <p className="flex uppercase space-x-24 text-primary">
            <p className="flex flex-col space-y-2">
              <h1 className="text-5xl ">20+</h1>
              <h4 className="max-w-24 text-sm lg:text-md font-semibold">
                types of ice creams
              </h4>
            </p>
            <p className="flex flex-col space-y-2">
              <h1 className="text-5xl ">6+</h1>
              <h4 className="max-w-24 text-sm lg:text-md font-semibold">
                years of experience
              </h4>
            </p>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Service;
