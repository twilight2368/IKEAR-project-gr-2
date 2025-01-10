import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import axios from "axios";

export function StoreAddModal() {
  const [open, setOpen] = useState(false);
  const [countryList, setCountryList] = useState();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    weekdayOpen: "",
    weekdayClose: "",
    weekendOpen: "",
    weekendClose: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/service1/other/country")
      .then((response) => {
        setCountryList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          error.response?.data?.message ||
            "An error occurred during getting country list."
        );
      });
  }, []);

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Validate required fields
    const {
      name,
      description,
      phone,
      address,
      city,
      country,
      weekdayOpen,
      weekdayClose,
      weekendOpen,
      weekendClose,
    } = formData;

    // Check if any required field is missing
    if (!name || !description || !phone || !address || !city || !country) {
      toast.error("All fields are required!");
      return;
    }

    try {
      // Make API call to submit the data
      const response = await axios.post(
        "http://localhost:5000/service1/store/store",
        formData
      );

      // Check if the response indicates success
      if (response.status === 201) {
        toast.success("Store added successfully!");
        console.log("Response from server:", response.data);

        // Reset form data after successful submission
        setFormData({
          name: "",
          description: "",
          phone: "",
          address: "",
          city: "",
          country: "",
          weekdayOpen: "",
          weekdayClose: "",
          weekendOpen: "",
          weekendClose: "",
        });

        handleOpen();
      } else {
        // If status is not 201, something went wrong
        toast.error("Failed to add store. Please try again.");
      }
    } catch (error) {
      // Handle any error that occurs during the API call
      console.error("Error submitting the form:", error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while submitting the form."
      );
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Add Store
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add a New Store</DialogHeader>
        <DialogBody>
          <form className="grid gap-4">
            <Input
              type="text"
              label="Store Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
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
                  name="country"
                  label="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </>
            )}
            <div className=" grid grid-cols-2 gap-3">
              <Input
                label="Weekday Open Time hh:mm"
                name="weekdayOpen"
                value={formData.weekdayOpen}
                onChange={handleChange}
              />
              <Input
                label="Weekday Close Time hh:mm"
                name="weekdayClose"
                value={formData.weekdayClose}
                onChange={handleChange}
              />
              <Input
                label="Weekend Open Time hh:mm"
                name="weekendOpen"
                value={formData.weekendOpen}
                onChange={handleChange}
              />
              <Input
                label="Weekend Close Time hh:mm"
                name="weekendClose"
                value={formData.weekendClose}
                onChange={handleChange}
              />
            </div>
          </form>
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
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
