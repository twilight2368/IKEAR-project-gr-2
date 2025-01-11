import { Card, CardBody } from "@material-tailwind/react";

export default function OrderItemCard({ item, quantity }) {
  return (
    <Card>
      <CardBody>
        <div className=" text-black font-bold"> Name item</div>

        <hr className="my-1" />
        <div>
          <div>Price: {item?.price}</div>
          <div>Color: {item?.color}</div>
          <div>Size: {item?.size}</div>
        </div>

        <hr className="my-1" />
        <div className=" text-black font-bold">
          Quantity: <span>{quantity}</span>
        </div>
      </CardBody>
    </Card>
  );
}
