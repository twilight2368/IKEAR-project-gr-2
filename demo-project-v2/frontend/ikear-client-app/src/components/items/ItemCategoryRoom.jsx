import ImageTest from "../../assets/images/polar-bear.png";

export default function ItemCategoryRoom() {
  return (
    <div className="w-full h-full">
      <div className=" h-3/4 w-full flex justify-center items-center">
        <img
          src={ImageTest}
          alt="image"
          className="h-full aspect-square rounded-full border-2 border-black"
        />
      </div>
      <div className=" h-1/4 w-full flex justify-center items-center">
        Category item
      </div>
    </div>
  );
}
