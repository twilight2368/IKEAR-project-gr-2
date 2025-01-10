import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export default function RoomCard({ room }) {
  return (
    <Card>
      <CardBody>{room.name}</CardBody>
    </Card>
  );
}
