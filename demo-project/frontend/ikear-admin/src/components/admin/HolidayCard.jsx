import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export default function HolidayCard({ holiday }) {
  return (
    <Card>
      <CardBody>{holiday.name}</CardBody>
    </Card>
  );
}
