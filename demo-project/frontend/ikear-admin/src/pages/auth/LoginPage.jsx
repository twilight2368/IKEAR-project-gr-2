import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAdmin } from "../../app/AdminSlice";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted: ", formData);
      const response = await axios.post(
        "http://localhost:5000/service1/auth/employee-login",
        formData
      );

      if (response.status === 200) {
        toast.success("successfully!");
        console.log("====================================");
        console.log(response.data.user);
        console.log("====================================");
        dispatch(setAdmin(response.data.user));

        setFormData({
          email: "",
          password: "",
        });

        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/store");
        }
      } else {
        toast.error("Failed. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
