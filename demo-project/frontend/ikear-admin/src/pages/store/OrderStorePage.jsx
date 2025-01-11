import React from "react";
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import OrderCard from "../../components/store/OrderCard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function OrderStorePage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const admin = useSelector((state) => state.admin); // Access Redux state
  const storeId = admin?.admin?.store;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/service4/orders/orders/store/" + storeId
        );
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
        setOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [storeId]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className="mb-2">Order</h1>
      </div>
      <div className="w-full px-12 grid grid-cols-1 gap-6 pb-40">
        {loading ? (
          <p>Loading orders...</p>
        ) : (
          orders.map((order) => <OrderCard key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
}
