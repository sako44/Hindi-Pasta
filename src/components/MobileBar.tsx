import MobileSections from "../utils/MobileSections";
import { useState } from "react";

function MobileBar() {
  const [show, setShow] = useState(false);
  const closeMenu = () => {
    setShow(false);
  };
  return (
    <>
      <div className="container px-8 flex  lg:hidden justify-between justify-center items-center">
        <nav
          className={`${
            show ? "flex" : "hidden"
          } lg:hidden flex z-10 text-white absolute z-20 top-[63px] md:top-[68px] left-0 py-5 px-5 h-[700px]
         w-[60%]  flex-col bg-[#1a1a1a] `}
        >
          <MobileSections text="Home" url="/" closeMenu={closeMenu} />
          <MobileSections text="Category" url="/category" closeMenu={closeMenu} />
          <MobileSections text="Contact" url="/contact" closeMenu={closeMenu} />
          <MobileSections text="About Us" url="/about" closeMenu={closeMenu} />
        </nav>
        <i
          className="ri-menu-line text-2xl text-black lg:hidden"
          onClick={() => setShow(!show)}
        ></i>
        <h1 className="text-2xl md:text-3xl font-semibold">Hindi Pasta</h1>
        <i
          className="ri-search-line transition duration-500
         ease-in-out hover:text-primary hover:cursor-pointer text-black text-2xl"
        ></i>
      </div>
    </>
  );
}
export default MobileBar;
