function ProductShow({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {

    let clasName : string = "mt-20 before:w-[50px] after:w-[50px] lg:before:w-[100px] lg:after:w-[100px] lin relative uppercase w-fit  mx-auto font-semibold text-3xl text-center"
  if (text == "cakes" || text == "pasta") {
    clasName+= " before:right-[-70%] after:left-[-70%] md:before:right-[-70%] md:after:left-[-70%] lg:before:right-[-120%] lg:after:left-[-120%] xl:before:right-[-120%] xl:after:left-[-120%]"
  }else if(text == "ice creams"){
    clasName+= " before:right-[-40%] after:left-[-40%] md:before:right-[-50%] md:after:left-[-50%] lg:before:right-[-70%] lg:after:left-[-70%] xl:before:right-[-70%] xl:after:left-[-80%]"
  }
  
    return (
    <>
      <h1
        className={clasName}
      >
        {text}
      </h1>
      <div className="container mx-auto grid  px-20 sm:px-36 md:px-24 xl:px-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 ">
        {children}
      </div>
    </>
  );
}

export default ProductShow;
