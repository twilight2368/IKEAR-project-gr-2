import { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../app/slicer/UserSlicer";
export default function Login() {
  const date = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // State to handle form input
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle login
  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Email and Password are required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/service1/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 200) {
        toast.success("Login successful!");
        console.log("====================================");
        console.log(response.data.user);
        console.log("====================================");
        dispatch(setUser(response.data.user));
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred during login."
      );
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-3 right-3 z-10">
        <Link to="/">
          <Button
            className="ibm-font border-black text-black flex items-baseline gap-2"
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
            <div className="w-full flex justify-center items-center">
              <Card className="h-full w-1/3">
                <CardBody className="flex flex-col justify-center gap-4">
                  <div className="h-16 flex justify-center items-start">
                    <img
                      src={LogoImage}
                      alt=""
                      className="h-full aspect-square"
                    />
                  </div>
                  <div className="text-center p-3">
                    <h2 className="text-2xl font-black ibm-font text-black">
                      Login
                    </h2>
                  </div>
                  <Input
                    color="black"
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    color="black"
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <Button
                    color="gray"
                    className="bg-black"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <div className="text-xs text-gray-600 text-center">
                    Don't have an account?{" "}
                    <span>
                      <Link
                        className="text-black hover:underline"
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
