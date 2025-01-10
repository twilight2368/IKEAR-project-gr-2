import React, { useState, useEffect } from "react";
import StoreCard from "../../components/admin/StoreCard";
import { Button } from "@material-tailwind/react";
import { StoreAddModal } from "../../components/admin/StoreAddModal";
import axios from "axios";

export default function AdminStorePage() {
  const [storeList, setStoreList] = useState([]); // State to hold store list
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch store list from API
  useEffect(() => {
    const fetchStoreList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/service1/store/stores"
        ); // API endpoint to fetch stores
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
        setStoreList(response.data.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching store list:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchStoreList();
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Stores</h1>
        <StoreAddModal />
      </div>
      <div className="w-full px-12 grid grid-cols-3 gap-6 pb-40">
        {loading ? (
          <>Loading...</> // Show loading while fetching
        ) : (
          storeList.map((store, index) => (
            <StoreCard key={index} store={store} /> // Render each store dynamically
          ))
        )}
      </div>
    </div>
  );
}
