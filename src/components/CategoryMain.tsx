import Product from "../utils/Product";
import { iceCreams, cakes, pasta } from "../data/products";
import ProductShow from "../utils/ProductShow";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { motion } from "framer-motion";

function CategoryMain() {
  return (
    <>
      <PageHeader
        url="/cate.png"
        header="Category"
        first="Home"
        seconed="Category"
      />
      <section>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <ProductShow text="ice creams">
            {iceCreams.map((product) => (
              <Product
                text={product.text}
                url={product.url}
                details={product.details}
                price={product.price}
                add="TOP"
              />
            ))}
          </ProductShow>
        </motion.nav>
        <motion.nav
          initial={{ opacity: 0, y: -7 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <ProductShow text="cakes">
            {cakes.map((product) => (
              <Product
                text={product.text}
                url={product.url}
                details={product.details}
                price={product.price}
                add="SLICE"
              />
            ))}
          </ProductShow>
        </motion.nav>
        <motion.nav
          initial={{ opacity: 0, y: 7 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <ProductShow text="pasta">
            {pasta.map((product) => (
              <Product
                text={product.text}
                url={product.url}
                details={product.details}
                price={product.price}
                add="KILO"
              />
            ))}
          </ProductShow>
        </motion.nav>
      </section>
      <Footer />
    </>
  );
}

export default CategoryMain;
