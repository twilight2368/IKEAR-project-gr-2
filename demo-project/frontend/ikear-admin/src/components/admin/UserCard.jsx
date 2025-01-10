import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function UserCard({ user }) {
  return (
    <Card>
      <CardBody className="min-h-40 text-black">
        <p className="w-full truncate font-bold text-lg ">{user.username}</p>
        <hr className="py-2" />
        <div className="w-full text-black">
          Email: <span className="text-black">{user.email}</span>
        </div>
        <div className="w-full text-black mb-3">
          Phone: <span className="text-black">{user.phone}</span>
        </div>
        <div className="w-full text-black">
          City: <span className="text-black">{user.city}</span>
        </div>
        <div className="w-full text-black mb-2">
          Country: <span className="text-black">{user.country}</span>
        </div>
        <div className="w-full text-black mb-3">
          Address: <p className="text-black">{user.address}</p>
        </div>
      </CardBody>
    </Card>
  );
}
