import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import LogoImage from "../assets/icons/polar-bear.svg";
import ImageBgBear from "../assets/images/animals-bear-wallpaper-a910386d819a7dcba627b8ff0011d61d.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";
export default function Register() {
  const date = new Date();
  const navigate = useNavigate();
  const [countryList, setCountryList] = useState();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/service1/other/country")
      .then((response) => {
        setCountryList(response.data.data);
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error(
          error.response?.data?.message ||
            "An error occurred during registration."
        );
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // API call for registration
  const handleRegister = async () => {
    console.log("====================================");
    console.log(formData);
    console.log("====================================");

    const {
      username,
      email,
      password,
      confirmPassword,
      phone,
      country,
      city,
      address,
    } = formData;

    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !country ||
      !city ||
      !address
    ) {
      toast.error("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/service1/auth/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          country: formData.country,
          city: formData.city,
          address: formData.address,
        }
      );

      if (response.status === 201) {
        toast.success("Registration successful!");
        // Redirect or perform any additional action here
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred during registration."
      );
    }
  };

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
              <Card className="h-full w-2/3">
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
                      Register
                    </h2>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-2">
                      <Input
                        color="black"
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-start-3 col-end-6">
                      <Input
                        color="black"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full col-span-5">
                      <Input
                        color="black"
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full col-span-5">
                      <Input
                        color="black"
                        label="Confirm password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full col-span-5">
                      <Input
                        color="black"
                        label="Phone number"
                        type="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="col-span-2">
                        {countryList && countryList.length ? (
                          <>
                            {" "}
                            <Select
                              color="gray"
                              label="Select a country"
                              value={formData.country}
                              onChange={(value) =>
                                setFormData({ ...formData, country: value })
                              }
                            >
                              {countryList?.map((country, index) => (
                                <Option key={index} value={country}>
                                  {country}
                                </Option>
                              ))}
                            </Select>
                          </>
                        ) : (
                          <>
                            <Input
                              color="black"
                              label="Country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-start-3 col-end-6">
                      <Input
                        color="black"
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-span-5">
                      <Input
                        color="black"
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <Button
                      className="w-1/2 bg-black"
                      color="gray"
                      onClick={handleRegister}
                    >
                      Register
                    </Button>
                  </div>
                  <div className="text-xs text-gray-600 text-center">
                    Already have an account?{" "}
                    <span>
                      <Link
                        className=" text-black hover:underline "
                        to="/login"
                      >
                        Login
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
