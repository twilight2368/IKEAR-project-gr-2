import { IconButton } from "@material-tailwind/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slicer/CartSlicer";
import { toast } from "react-toastify";

export default function AddCartButton({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      id: item._id,
      name: item.name,
      price: item.price,
      color: item.color,
      size: item.size,
      product: item.product.name,
      room: item.room.name,
      holiday: item.holiday.name,
    };

    dispatch(addToCart(cartItem));
    toast.success("Added to cart successfully!", {
      position: "top-center",
    });
  };

  return (
    <IconButton
      color="gray"
      className="text-white bg-black text-xl rounded-full"
      onClick={handleAddToCart}
    >
      <MdOutlineAddShoppingCart />
    </IconButton>
  );
}
