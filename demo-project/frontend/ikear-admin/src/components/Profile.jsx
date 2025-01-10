import { Button } from "@material-tailwind/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAdmin } from "../app/AdminSlice";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin);
  return (
    <div className="w-full h-full flex flex-row gap-2 p-2">
      <div className="w-2/3 h-full text-sm flex flex-col justify-center">
        <p className=" truncate">Name: {admin.admin.name}</p>
        <p className=" truncate">Email: {admin.admin.email}</p>
        <p className=" truncate">Role: {admin.admin.role}</p>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center">
        <Button
          color="red"
          className=""
          onClick={() => {
            dispatch(removeAdmin());
            navigate("/");
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
