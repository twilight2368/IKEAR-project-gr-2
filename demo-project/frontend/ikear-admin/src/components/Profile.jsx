import { Button } from "@material-tailwind/react";
import React from "react";

export default function Profile() {
  return (
    <div className="w-full h-full flex flex-row gap-2 p-2">
      <div className="w-2/3 h-full text-sm flex flex-col justify-center">
        <p className=" truncate">Name: ...</p>
        <p className=" truncate">Email: ...</p>
        <p className=" truncate">Role: ...</p>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center">
        <Button color="red" className="">
          Logout
        </Button>
      </div>
    </div>
  );
}
