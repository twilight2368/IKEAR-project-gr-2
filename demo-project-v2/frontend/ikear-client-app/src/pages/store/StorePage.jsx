import ItemCard from "../../components/items/ItemCard";

export default function StorePage() {
  return (
    <div className="w-full">
      <div className="w-full p-6 mb-6">
        <h2 className=" text-3xl font-black mb-6">Our new products</h2>
        <div className="grid grid-cols-5 gap-6 px-6">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>

      <div className="w-full p-6">
        <h2 className=" text-3xl font-black mb-6">
          Find items best for your room
        </h2>
        <div className="w-full flex flex-row justify-between">
          <div className="w-3/4">1</div>
          <div className="w-1/4">1</div>
        </div>
      </div>
    </div>
  );
}
