function Product({
  text,
  url,
  details,
  price,
  add,
}: {
  text: string;
  url: string;
  details: string;
  price: number;
  add: string;
}) {
  return (
    <>
      <div className="relative flex flex-col rounded-full space-y-4 h-[500px]">
        <img
          src={url}
          alt={text}
          className="w-[300px] h-[300px] object-cover"
        />
        <p className="flex flex-col space-y-3">
          <h1 className="font-semibold text-2xl">{text}</h1>
          <h4>{details}</h4>
        </p>
        <p className="absolute text-end footer-font bottom-2 right-2">
          <span className="font-semibold text-md">{add} : </span>
          <span className="text-xl">{price} </span>
          <span className="font-semibold text-md">TL</span>
        </p>
      </div>
    </>
  );
}

export default Product;
