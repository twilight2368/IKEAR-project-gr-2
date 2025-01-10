import React, { useEffect, useState } from "react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios"; // Import Axios

export default function StoreInfoCard() {
  const admin = useSelector((state) => state.admin); // Access Redux state
  const storeId = admin?.admin?.store; // Extract store ID
  const [store, setStore] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    weekdayOpen: "",
    weekdayClose: "",
    weekendOpen: "",
    weekendClose: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch store data based on storeId using Axios
    const fetchStoreData = async () => {
      if (!storeId) {
        setError("Store ID is missing");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/service1/store/store/${storeId}`
        );

        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
        setStore(response.data.data);
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [storeId]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full h-full">
      <Card className="w-full h-full">
        <CardBody>
          <div className="flex flex-col gap-2 text-black capitalize">
            <div>
              <span className="font-bold">Name:</span> {store.name || "N/A"}
            </div>
            <div>
              <span className="font-bold">Phone:</span> {store.phone || "N/A"}
            </div>
            <div>
              <span className="font-bold">Address:</span>{" "}
              {store.address || "N/A"}
            </div>
            <div>
              <span className="font-bold">City:</span> {store.city || "N/A"}
            </div>
            <div>
              <span className="font-bold">Country:</span>{" "}
              {store.country || "N/A"}
            </div>
            <div>
              <span className="font-bold">Weekday Open:</span>{" "}
              {store.weekdayOpen || "N/A"}
            </div>
            <div>
              <span className="font-bold">Weekday Close:</span>{" "}
              {store.weekdayClose || "N/A"}
            </div>
            <div>
              <span className="font-bold">Weekend Open:</span>{" "}
              {store.weekendOpen || "N/A"}
            </div>
            <div>
              <span className="font-bold">Weekend Close:</span>{" "}
              {store.weekendClose || "N/A"}
            </div>
          </div>
          <div className="w-full h-32 flex justify-center items-center">
            <Button
              onClick={() => alert("Change functionality to be implemented!")}
            >
              Change
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
