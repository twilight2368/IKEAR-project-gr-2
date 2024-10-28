import ImageProduct from "../../assets/images/polar-bear.png";

export default function ItemCategoryProduct() {
  return (
    <div className="w-full h-48 ">
      <div className=" h-3/4 p-3 flex justify-center items-center">
        <img
          src={ImageProduct}
          alt=""
          className="h-full aspect-square rounded-full border-2 border-black"
        />
      </div>
      <div className=" h-1/4 text-center">Item product</div>
    </div>
  );
}
