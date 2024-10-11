import { reviews } from "../data/reviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function SampleNextArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#2196f3",
        color: "#2196f3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        fontSize: "20px",
        marginRight: "-20px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#2196f3",
        color: "#2196f3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        fontSize: "20px",
        marginLeft: "-20px",
      }}
      onClick={onClick}
    />
  );
}

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-24">
      <motion.h1
      initial={{ opacity: 0, x: 7 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="sm:w-fit w-[60%] mx-auto mb-12 lin
       relative
      text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide">
        {" "}
        Some Reviews From Our Clients{" "}
      </motion.h1>
      <motion.div
      initial={{ opacity: 0, x: -7 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="container mx-auto px-20">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div className="flex flex-col bg-slate-200 rounded-[15px] p-5 space-y-3 ">
              <p className="flex items-center space-x-4">
                <img src="/user.svg" alt="" className=" w-[70px] h-[60px] pb-2 rounded-[100%]" />
                <p>
                  <h1 className="text-xl font-semibold">{review.name}</h1>
                  <h4 className="font-light text-md">Client Review</h4>
                </p>
              </p>
              <p>{review.review}</p>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default Reviews;
