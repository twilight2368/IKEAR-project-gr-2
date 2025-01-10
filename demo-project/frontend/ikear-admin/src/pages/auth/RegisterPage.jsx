import React, { useState, useEffect } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    store: "",
  });

  const [stores, setStores] = useState([]);
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/service1/other/roles").then((response) => {
      setRoles(response.data.data);
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
    });
    axios
      .get("http://localhost:5000/service1/store/stores")
      .then((response) => {
        setStores(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted: ", formData);
      const response = await axios.post(
        "http://localhost:5000/service1/auth/employee-register",
        formData
      );

      if (response.status === 201) {
        toast.success("successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          role: "",
          store: "",
        });
        navigate("/login");
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
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {roles.length && roles ? (
            <>
              <Select
                label="Role"
                value={formData.role}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, role: value }))
                }
                required
              >
                {roles.map((value, i) => (
                  <Option key={i} value={value}>
                    {value}
                  </Option>
                ))}
              </Select>
            </>
          ) : (
            <></>
          )}
          {stores.length && stores ? (
            <Select
              label="Store"
              defaultValue={formData.store}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, store: value }))
              }
              required
            >
              {stores.map((store) => (
                <Option key={store._id} value={store._id}>
                  {store.name}
                </Option>
              ))}
            </Select>
          ) : (
            <></>
          )}
          <Button type="submit" fullWidth>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
