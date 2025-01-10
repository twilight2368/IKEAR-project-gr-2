import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function StoreCard({ store }) {
  return (
    <>
      <Card>
        <CardBody className="min-h-40">
          <div className="w-full text-xl font-bold ">{store.name}</div>
          <div className="w-full text-black">
            <p className=" line-clamp-2">Address: {store.address}</p>
          </div>
          <div className="w-full text-black">
            City: <span className="text-black">{store.city}</span>
          </div>
          <div className="w-full text-black mb-2">
            Country: <span className="text-black">{store.country}</span>
          </div>
          <div className="w-full text-black mb-3">
            Phone: <span className="text-black">{store.phone}</span>
          </div>
          <hr />
          <div className="w-full text-black mt-3">
            Weekday:{" "}
            <span className="text-black">
              {store.weekdayOpen}-{store.weekdayClose}
            </span>
          </div>
          <div className="w-full text-black mb-3">
            Weekend:{" "}
            <span className="text-black">
              {store.weekendOpen}-{store.weekendClose}
            </span>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
