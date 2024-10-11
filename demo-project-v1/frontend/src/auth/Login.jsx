import React from "react";
import "./style.css";
import Logo from "../assets/img/icons/cool.png";
import { Button, Card, CardBody, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
export default function Login() {
  const date = new Date();
  return (
    <div className="w-full h-screen background-auth-page flex justify-center items-center">
      <Card className=" bg-white/0 h-5/6 w-96 shadow-lg shadow-black ">
        <CardBody className=" bg-black/75 h-full rounded-xl">
          <div className=" h-8 ">
            <img src={Logo} alt="" className=" h-full aspect-square mx-auto" />
          </div>
          <div className="w-full text-center text-white font-bold text-2xl mb-12 ">
            Login
          </div>
          <div className=" flex flex-col gap-3 mb-12">
            <Input
              label="Username"
              color="white"
              size="lg"
              className=" text-white"
            />
            <Input
              label="Password"
              color="white"
              type="password"
              size="lg"
              className=" text-white"
            />
          </div>
          <div className=" text-xs text-red-300 mb-2 text-center">
            Something went wrong!!!
          </div>
          <div className="w-full mb-12">
            <Button color="white" className="w-full">
              Login
            </Button>
            <div className="flex flex-row justify-center items-center gap-3 text-white">
              <div className="w-2/5">
                <hr />
              </div>
              <div>or</div>
              <div className="w-2/5">
                <hr />
              </div>
            </div>
            <Button
              color="white"
              className="w-full flex flex-row justify-center items-center gap-3 mb-3"
            >
              <FontAwesomeIcon icon={faGoogle} />
              <span> Login with Google</span>
            </Button>
            <Button color="white" className="w-full">
              <span>Go to register</span>
            </Button>
          </div>

          <div className=" text-white text-xs text-center">
            &copy; {date.getFullYear()} vO-Ov Dimensional Glasses™
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
