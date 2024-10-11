import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <PageHeader
        url="/contact.png"
        header="Contact Us"
        first="Home"
        seconed="Contact"
      />
      <section className=" mb-36 mt-24">
        <div
          className=" container px-6 xl:px-12 mx-auto flex flex-col max-xl:space-y-12 items-center
           xl:justify-center lg:space-x-20 xl:space-x-24 2xl:space-x-40  lg:flex-row "
        >
          <motion.img
            initial={{ opacity: 0, x: -7 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            src="/suslu.webp"
            alt=""
            className="md:w-[700px] md:h-[530px] lg:w-[500px] lg:h-[530px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 7 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className=" flex flex-col space-y-6 pb-4"
          >
            <h2 className=" relative w-[150px] half-line uppercase text-primary">
              order your cake
            </h2>
            <h1 className=" uppercase text-[42px]  max-w-[410px] leading-[50px] tracking-wide">
              need sweets? get in touch with us
            </h1>
            <p className="text-[#969696] text-[16px] 2xl:max-w-[400px]">
              Get in touch to discuss your employee wellbeing needs today.
              Please give us a call, drop us an email.
            </p>

            <p className="flex space-x-6 items-center">
              <i className="ri-map-pin-line text-3xl text-primary bg-slate-200 p-3 rounded-[90%]"></i>
              <p>
                <h1 className="text-2xl text-primary font-semibold">
                  Location
                </h1>
                <h4 className="text-[#969696] text-[16px] 2xl:max-w-[400px]">
                  CUMHURIYET MAH .HATAY/ISKENDERN
                </h4>
              </p>
            </p>
            <p className="flex space-x-6 items-center">
              <i className="ri-phone-line text-3xl text-primary bg-slate-200 p-3 rounded-[90%]"></i>
              <p>
                <h1 className="text-2xl text-primary font-semibold">Phone</h1>
                <h4 className="text-[#969696] text-[16px] 2xl:max-w-[400px]">
                  +90 523 523 52 52
                </h4>
              </p>
            </p>
            <p className="flex space-x-6 items-center">
              <i className="ri-mail-open-line text-3xl text-primary bg-slate-200 p-3 rounded-[90%]"></i>
              <p>
                <h1 className="text-2xl text-primary font-semibold">Email</h1>
                <h4 className="text-[#969696] text-[16px] 2xl:max-w-[400px]">
                  hindi@gmail.com
                </h4>
              </p>
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="mx-auto mt-24
           w-[100%] h-[400px] sm:w-[450px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[500px]
           "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.9178831241978!2d36.16369506506652!3d36.58613251108879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f59daec136d6d%3A0xc1edbc0662813325!2sHINDI%20dondurmac%C4%B1!5e0!3m2!1sen!2str!4v1724922954577!5m2!1sen!2str"
            width="100%"
            height="100%"
            className=" max-lg:px-6"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
