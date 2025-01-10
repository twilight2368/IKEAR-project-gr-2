import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";

export function AddItemModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    short_description: "",
    price: "",
    color: "", // This will store the selected color value
    size: "", // This will store the selected size value
    holiday: "", // This will store the holiday ID
    product: "", // This will store the product ID
    room: "", // This will store the room ID
  });

  const [holidays, setHolidays] = useState([]);
  const [products, setProducts] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [colors, setColors] = useState([]); // To store the color options
  const [sizes, setSizes] = useState([]); // To store the size options

  const handleOpen = () => setOpen(!open);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { name, description, short_description, price } = formData;

    // Validation
    if (!name || !description || !short_description || !price) {
      toast.error("All required fields must be filled!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/service2/item/items",
        {
          ...formData,
          price: Number(price), // Ensure price is a number
        }
      );

      if (response.status === 201) {
        toast.success("Item added successfully!");
        setFormData({
          name: "",
          description: "",
          short_description: "",
          price: "",
          color: "",
          size: "",
          holiday: "",
          product: "",
          room: "",
        });
        handleOpen();
      } else {
        toast.error("Failed to add item. Please try again.");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while adding the item."
      );
    }
  };

  // Fetch holidays, products, rooms, colors, and sizes on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [holidayRes, productRes, roomRes, colorRes, sizeRes] =
          await Promise.all([
            axios.get("http://localhost:5000/service2/other/holidays"),
            axios.get("http://localhost:5000/service2/other/products"),
            axios.get("http://localhost:5000/service2/other/rooms"),
            axios.get("http://localhost:5000/service2/other/colors"),
            axios.get("http://localhost:5000/service2/other/sizes"),
          ]);

        setHolidays(holidayRes.data.data);
        setProducts(productRes.data.data);
        setRooms(roomRes.data.data);
        setColors(colorRes.data.data); // Store color options
        setSizes(sizeRes.data.data); // Store size options
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Add item
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add New Item</DialogHeader>
        <DialogBody>
          <div className="grid gap-4">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required
            />
            <Textarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required
            />
            <Input
              label="Short Description"
              name="short_description"
              value={formData.short_description}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required
            />

            <div className=" grid grid-cols-2 gap-3">
              <Input
                label="Price"
                name="price"
                value={formData.price}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                required
                type="number"
              />
              <Select
                label="Color"
                name="color"
                value={formData.color} // Bind value to formData
                onChange={(value) => handleChange("color", value)} // Direct value
                required
              >
                {colors.map((color, index) => (
                  <Option key={index} value={color}>
                    {color}
                  </Option>
                ))}
              </Select>

              <Select
                label="Size"
                name="size"
                value={formData.size} // Bind value to formData
                onChange={(value) => handleChange("size", value)} // Direct value
                required
              >
                {sizes.map((size, index) => (
                  <Option key={index} value={size}>
                    {size}
                  </Option>
                ))}
              </Select>

              <Select
                label="Holiday"
                name="holiday"
                value={formData.holiday} // Bind value to formData
                onChange={(value) => handleChange("holiday", value)} // Direct value
                required
              >
                {holidays.map((holiday) => (
                  <Option key={holiday._id} value={holiday._id}>
                    {holiday.name}
                  </Option>
                ))}
              </Select>

              <Select
                label="Product"
                name="product"
                value={formData.product} // Bind value to formData
                onChange={(value) => handleChange("product", value)} // Direct value
                required
              >
                {products.map((product) => (
                  <Option key={product._id} value={product._id}>
                    {product.name}
                  </Option>
                ))}
              </Select>

              <Select
                label="Room"
                name="room"
                value={formData.room} // Bind value to formData
                onChange={(value) => handleChange("room", value)} // Direct value
                required
              >
                {rooms.map((room) => (
                  <Option key={room._id} value={room._id}>
                    {room.name}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
