import Footer from "./Footer";
import PageHeader from "./PageHeader";
import ScrollBar from "./ScrollBar";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <>
      <PageHeader
        url="public/about.png"
        header="About us"
        first="Home"
        seconed="About"
      />
      <section>
        <head className="container flex flex-col space-y-12 mx-auto px-12 lg:px-32">
          <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          >
            <h4
              className="
        mt-20 before:w-[50px] after:w-[50px] lg:before:w-[100px] lg:after:w-[100px] lin relative uppercase w-fit  mx-auto font-semibold xl:text-lg text-center text-primary 
        before:right-[-30%] after:left-[-30%] md:before:right-[-50%] md:after:left-[-50%] lg:before:right-[-70%] lg:after:left-[-70%] xl:before:right-[-50%] xl:after:left-[-50%]"
            >
              HINDI PASTA & DONDURMA
            </h4>
            <h1 className="text-center text-4xl lg:text-5xl leading-[55px] w-[80%] lg:w-[60%] xl:w-[50%] mx-auto mt-5 footer-font uppercase tracking-wider">
              We Create Incredibly Tasty Cakes</h1>
          </motion.p>
          <p className="flex flex-col  max-lg:space-y-12 lg:flex-row lg:space-x-28 footer-font mx-auto">
            <motion.p
            initial={{ opacity: 0, x: -7 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="xl:w-[230%] 2xl:w-[200%]">
              <span className="text-2xl text-primary">"Hindi"</span> was established in 2018 with a passion for delivering
              high-quality cakes, ice creams, and a variety of sweets. From the
              very beginning, we've been dedicated to crafting delicious and
              innovative desserts, using only the finest ingredients. Our menu
              has evolved over time to include a wide selection of treats, from
              classic flavors to new and exciting creations.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, x: 7 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            >
            <span className="text-2xl text-primary">Whether</span> it's our creamy, fruit-infused ice creams or our diverse
              range of cakes, every product at Hindi reflects our commitment to
              quality and taste. We continually strive to bring new flavors and
              experiences to our customers, ensuring every visit to Hindi is
              memorable,, catering to all
              taste preferences. Our team of talented bakers and chefs work
            </motion.p>
          </p>
          <motion.img
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          src="public/about-cake.jpg" alt="" className="object-right  w-[90%] mx-auto h-[350px] object-cover" />
        </head>
      </section>
      <ScrollBar />
      <Footer />
    </>
  );
}

export default AboutUs;
