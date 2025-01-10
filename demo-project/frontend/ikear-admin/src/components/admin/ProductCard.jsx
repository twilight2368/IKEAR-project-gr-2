import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <Card>
      <CardBody>{product.name}</CardBody>
    </Card>
  );
}
