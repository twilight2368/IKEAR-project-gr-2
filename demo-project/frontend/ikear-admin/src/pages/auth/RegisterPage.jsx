import React, { useState, useEffect } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";

const ROLE_LIST = {
  ROLES: {
    ADMIN: "Admin",
    EMPLOYEE: "Employee",
    MANAGER: "Manager",
  },
};

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

  useEffect(() => {
    // Simulate fetching stores from API
    setStores([
      { id: "1", name: "Store 1" },
      { id: "2", name: "Store 2" },
      { id: "3", name: "Store 3" },
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
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
          <Select
            label="Role"
            value={formData.role}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, role: value }))
            }
            required
          >
            {Object.entries(ROLE_LIST.ROLES).map(([key, value]) => (
              <Option key={key} value={value}>
                {value}
              </Option>
            ))}
          </Select>
          <Select
            label="Store"
            value={formData.store}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, store: value }))
            }
            required
          >
            {stores.map((store) => (
              <Option key={store.id} value={store.id}>
                {store.name}
              </Option>
            ))}
          </Select>
          <Button type="submit" fullWidth>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
