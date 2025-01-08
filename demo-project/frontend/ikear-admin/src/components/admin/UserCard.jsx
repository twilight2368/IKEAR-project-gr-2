import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function UserCard() {
  return (
    <Card>
      <CardBody className="min-h-40 text-black">
        <p className="w-full truncate font-bold text-lg ">Users Name</p>
        <hr className="py-2" />
        <div className="w-full text-black">
          Email: <span className="text-black">Email</span>
        </div>
        <div className="w-full text-black mb-3">
          Phone: <span className="text-black">000-000-0000</span>
        </div>
        <div className="w-full text-black">
          City: <span className="text-black">City Name</span>
        </div>
        <div className="w-full text-black mb-2">
          Country: <span className="text-black">Country Name</span>
        </div>
        <div className="w-full text-black mb-3">
          Address:{" "}
          <p className="text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae est
            error facere nulla recusandae aperiam dolores impedit tenetur
            dolorum eligendi, culpa vero facilis sint ab? Magni nam facilis
            dolores laborum.
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
