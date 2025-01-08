import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function EmployeeCard() {
  return (
    <Card>
      <CardBody className="min-h-40">
        <p className="w-full truncate font-bold ">Employee Name</p>
        <hr className="py-2" />
        <div className="w-full text-black">
          Email: <span className="text-black">Email</span>
        </div>
        <div className="w-full text-black mb-3">
          Phone: <span className="text-black">000-000-0000</span>
        </div>
      </CardBody>
    </Card>
  );
}
