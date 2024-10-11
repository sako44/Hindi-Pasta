import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <footer className="bg-[#161616] py-32 px-2 mt-24">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="space-x-4 items-start justify-center mr-6 hidden lg:flex"
        >
          <img src="public/logo.png" alt="" className="w-[38px]" />
          <h1 className="footer-font text-4xl tracking-[0.5em] text-white pt-1">
            HINDI
          </h1>
        </motion.p>
        <div className="container flex flex-col space-y-10 items-center justify-center mx-auto lg:flex-row lg:space-x-12 xl:space-x-28 2xl:space-x-60">
          <motion.nav
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="flex flex-col space-y-5 justify-center uppercase"
          >
            <i className="ri-map-pin-line text-xl text-primary  ">
              <span className="text-[17px] text-white ml-2 footer-font font-semibold">
                CUMHURIYET MAH.{" "}
                <span className="ml-6 block">HATAY/ISKENDERN</span>
              </span>
            </i>
            <i className="ri-phone-line text-xl text-primary ">
              <span className="text-[17px] text-white footer-font ml-2 font-semibold">
                +90 523 523 52 52
              </span>
            </i>
            <i className="ri-mail-open-line text-xl text-primary ">
              <span className="text-[17px] text-white footer-font ml-2 font-semibold">
                hindi@gmail.com
              </span>
            </i>
          </motion.nav>
          <motion.hr
            initial={{ opacity: 0, x: -7 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="w-[70%] lg:hidden"
          />
          <motion.head
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="flex flex-col space-y-9 items-center lg:pb-12"
          >
            <p className="space-x-4 items-start justify-center mr-3 flex lg:hidden">
              <img src="public/logo.png" alt="" className="w-[38px]" />
              <h1 className="footer-font text-4xl tracking-[0.5em] text-white pt-1">
                HINDI
              </h1>
            </p>
            <h1 className=" xl:w-[470px] w-[90%] sm:w-[400px] text-3xl text-center text-white">
              Whisper to us about your feelings, and we will prepare what you
              need now.
            </h1>
            <p className="flex space-x-3 ">
              <i
                className="ri-whatsapp-line text-2xl py-2 px-3 border border-primary
             rounded-[100%] hover:bg-primary cursor-pointer text-white
             transition-all duration-500 ease-in-out"
              ></i>
              <i
                className="ri-facebook-line text-2xl py-2 px-3 border border-primary
             rounded-[100%] hover:bg-primary cursor-pointer text-white
             transition-all duration-500 ease-in-out"
              ></i>
              <i
                className="ri-twitter-x-line text-2xl py-2 px-3 border border-primary
             rounded-[100%] hover:bg-primary cursor-pointer text-white
             transition-all duration-500 ease-in-out
             "
              ></i>
              <i
                className="ri-instagram-line text-2xl py-2 px-3 border border-primary
             rounded-[100%] hover:bg-primary cursor-pointer text-white
             transition-all duration-500 ease-in-out"
              ></i>
            </p>
          </motion.head>
          <motion.hr
            initial={{ opacity: 0, x: -7 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="w-[70%] lg:hidden"
          />
          <motion.nav
            initial={{ opacity: 0, x: 7 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="flex flex-col
             pb-[67px] space-y-4 lg:text-end w-[100%] sm:max-lg:w-[400px] lg:w-fit text-center"
          >
            <h4 className="font-semibold text-white uppercase footer-font ">
              <span className="text-primary ">mon – fri: </span>9.00 am – 6.00pm
            </h4>
            <h4 className="font-semibold text-white uppercase footer-font ">
              <span className="text-primary">sat: </span>11.00 am – 6.00pm
            </h4>
            <h4 className="font-semibold text-white uppercase footer-font ">
              <span className="text-primary">sun: </span>11.00 am – 6.00pm
            </h4>
          </motion.nav>
        </div>
      </footer>
      <div className="bg-[#161616] p-4 text-center border-t border-[#969696]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="text-[18px] text-[#969696]"
        >
          Copyright © 2024 Hindi by Radwan. All Rights Reserved
        </motion.p>
      </div>
    </>
  );
}

export default Footer;
