import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import LogoImage from "../assets/icons/polar-bear.svg";
import ImageBgBear from "../assets/images/animals-polar-bears-underwater-wallpaper-d0d37a04f11f62469b7f8b645375e293.jpg";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Login() {
  const date = new Date();
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-3 right-3 z-10">
        <Link to="/">
          <Button
            className=" ibm-font border-black text-black flex items-baseline gap-2"
            color="white"
            variant="outlined"
          >
            <span>
              <FaHouse />
            </span>
            <span>Back to home</span>
          </Button>
        </Link>
      </div>
      <div className="h-full w-full">
        <div className="w-full h-full flex flex-row">
          <div className="w-1/3 h-full overflow-hidden">
            <img src={ImageBgBear} alt="" className="w-full h-auto" />
          </div>
          <div className="w-2/3 flex justify-center items-center gap-12 p-6 bg-gray-50">
            <div className=" w-full flex justify-center items-center">
              <Card className="h-full w-1/3">
                <CardBody className=" flex flex-col justify-center gap-4">
                  <div className="h-16 flex justify-center items-start">
                    <img
                      src={LogoImage}
                      alt=""
                      className="h-full aspect-square"
                    />
                  </div>
                  <div className="text-center p-3">
                    <h2 className=" text-2xl font-black ibm-font text-black">
                      Login
                    </h2>
                  </div>
                  <Input color="black" label="Username or email" />
                  <Input color="black" label="Password" type="password" />
                  <div className="w-full h-3 text-xs text-red-400 text-center">
                    Something went wrong!!!
                  </div>
                  <Button color="gray" className=" bg-black">
                    {" "}
                    Login{" "}
                  </Button>
                  <div className="text-xs text-gray-600  text-center">
                    Don't have an account?{" "}
                    <span>
                      <Link
                        className=" text-black  hover:underline "
                        to="/register"
                      >
                        Register
                      </Link>
                    </span>
                  </div>
                  <div className="">
                    <hr className="my-3 border-blue-gray-50" />
                    <Typography
                      color="blue-gray"
                      className="text-center text-xs font-normal"
                    >
                      &copy; {date.getFullYear()} IKEAR
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
