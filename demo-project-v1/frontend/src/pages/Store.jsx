import ItemDisplay from "../components/item/ItemDisplay";

export default function Store() {
  return (
    <div className=" w-full grid grid-cols-4 p-6 gap-3">
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />

      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
    </div>
  );
}
