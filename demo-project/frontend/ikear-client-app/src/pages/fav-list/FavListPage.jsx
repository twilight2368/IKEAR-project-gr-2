import { Footer } from "../../components/footer/Footer";
import ItemCard from "../../components/items/ItemCard";
import ItemFav from "../../components/items/ItemFav";

export default function FavListPage() {
  return (
    <div className="w-full">
      <div className=" p-6 pt-12 ">
        <div className=" w-full mb-3">
          <span className=" text-4xl font-black ">My favorite</span>
        </div>
        <div className=" text-sm text-gray-600 ">
          Find all your favorite items in one place.
        </div>
      </div>
      <div className="w-full min-h-screen mb-12">
        <div className="w-full p-6 grid grid-cols-5 gap-6 px-20 ">
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
          <ItemCard isFav={true} />
        </div>
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}
