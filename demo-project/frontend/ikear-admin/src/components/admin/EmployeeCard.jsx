import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function EmployeeCard({ employee }) {
  return (
    <Card>
      <CardBody className="min-h-40">
        <p className="w-full truncate font-bold ">{employee.name}</p>
        <hr className="py-2" />
        <div className="w-full text-black">
          Email: <span className="text-black">{employee.email}</span>
        </div>
        <div className="w-full text-black mb-3">
          Phone: <span className="text-black">{employee.phone}</span>
        </div>
      </CardBody>
    </Card>
  );
}
