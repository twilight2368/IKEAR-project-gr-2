import ImageProduct from "../../assets/icons/webpack-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
export default function ItemCategoryProduct() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-48 cursor-pointer"
      onClick={() => {
        navigate("/store/product/item-id");
      }}
    >
      <div className=" h-3/4 p-3 flex justify-center items-center">
        <img src={ImageProduct} alt="" className="h-full aspect-square" />
      </div>
      <div className=" h-1/4 text-center">Item product</div>
    </div>
  );
}
