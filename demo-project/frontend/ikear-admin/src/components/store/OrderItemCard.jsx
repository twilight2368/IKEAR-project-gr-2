import { Card, CardBody } from "@material-tailwind/react";

export default function OrderItemCard() {
  return (
    <Card>
      <CardBody>
        <div className=" text-black font-bold"> Name item</div>
        <hr className="my-1" />
        <div>
          <div>Product</div>
          <div>Room</div>
          <div>Holiday: </div>
        </div>
        <hr className="my-1" />
        <div>
          <div>Price</div>
          <div>Color</div>
          <div>Size</div>
        </div>


        <hr className="my-1" />
        <div className=" text-black font-bold">
          Quantity: <span>00</span>
        </div>
      </CardBody>
    </Card>
  );
}
