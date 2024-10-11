import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PageHeader({
  url,
  header,
  first,
  seconed,
}: {
  url: string;
  header: string;
  first: string;
  seconed: string;
}) {
  return (
    <section
      className=" bg-center relative bg-shadow flex justify-center items-center h-[400px]"
      style={{ backgroundImage: "url(" + `${url}` + ")" }}
    >
      <p className="text-center text-white relative z-10">
        <motion.h1
          initial={{ opacity: 0, x: 7 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="text-5xl font-bold uppercase mb-4 footer-font"
        >
          {header}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -7 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Link
            to="/"
            className="font-semibold text-lg hover:underline hover:text-primary transition-all duration-500 ease-in-out
            "
          >
            {first}
          </Link>
          <span className="font-semibold text-lg "> {">"} </span>
          <span className="font-semibold text-lg underline">{seconed}</span>
        </motion.div>
      </p>
    </section>
  );
}

export default PageHeader;
