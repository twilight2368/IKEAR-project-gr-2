import React from "react";
import { Button, Card, CardBody } from "@material-tailwind/react";
export default function StoreInfoCard() {
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full">
        <CardBody>
          <div className=" flex flex-col gap-2 text-black capitalize">
            <div>name:</div>
            <div>phone:</div>
            <div>address:</div>
            <div>city:</div>
            <div>country:</div>
            <div>weekday Open:</div>
            <div>weekday Close: </div>
            <div>weekend Open:</div>
            <div>weekend Close:</div>
          </div>
          <div className="w-full h-32 flex justify-center items-center">
            <Button> Change</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
