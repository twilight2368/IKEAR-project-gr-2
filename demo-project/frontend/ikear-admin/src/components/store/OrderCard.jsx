import { Card, CardBody, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function OrderCard({ order }) {
  return (
    <Card>
      <CardBody>
        <div>Order_ID: {order?._id}</div> <hr className="py-2" />
        <div>
          <p className="w-full truncate text-black ">{order?.user?.username}</p>
          <div className="w-full text-black">
            Email: <span className="text-black">{order?.user?.email}</span>
          </div>
          <div className="w-full text-black mb-3">
            Phone: <span className="text-black">{order?.user?.phone}</span>
          </div>
        </div>
        <div>Date: {order?.createdAt}</div>
        <div>Total item: {order?.total_items}</div>
        <div>Total amount: {order?.total_items}</div>
        <div>Total price: {order?.total_price}</div>
        <div className=" flex justify-end gap-3">
          <Chip className="w-fit" value={order?.delivery_type} />
          <Chip value={order?.status} />
          <Link
            className="text-blue-400 underline"
            to={"/store/order/" + order?._id}
          >
            See details
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
