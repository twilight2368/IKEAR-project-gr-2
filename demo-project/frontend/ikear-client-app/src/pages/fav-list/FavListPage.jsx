import { Footer } from "../../components/footer/Footer";
import ItemFav from "../../components/items/ItemFav";

export default function FavListPage() {
  return (
    <div className="w-full">
      <div className=" p-6 pt-12 ">
        <div className=" w-full mb-3">
          <span className=" text-4xl font-black ">My favorite list</span>
        </div>
        <div className=" text-sm text-gray-600 ">
          Find all your favorite items in one place.
        </div>
      </div>
      <div className="w-full min-h-screen mb-12">
        <div className="w-2/3 p-6 flex flex-col gap-6 ">
          <ItemFav />
          <ItemFav />
          <ItemFav />

          <ItemFav />

          <ItemFav />
          <ItemFav />
        </div>
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}
