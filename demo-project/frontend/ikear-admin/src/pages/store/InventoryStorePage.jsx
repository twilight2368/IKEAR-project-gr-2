import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import InventoryCard from "../../components/store/InventoryCard";
import { useSelector } from "react-redux";
import axios from "axios";

export default function InventoryStorePage() {
  const admin = useSelector((state) => state.admin); // Access Redux state
  const storeId = admin?.admin?.store; // Extract store ID
  const [loading, setLoading] = useState(true);
  const [inventory, setInventory] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    itemsPerPage: 24,
  });

  useEffect(() => {
    // Fetch store data based on storeId using Axios
    const fetchStoreData = async () => {
      if (!storeId) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/service2/inventory/inventory-store/${storeId}`,
          {
            params: {
              page: pagination.currentPage,
              limit: pagination.itemsPerPage,
            },
          }
        );

        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");

        setInventory(response.data.data);
        setPagination({
          currentPage: response.data.pagination.currentPage,
          totalItems: response.data.pagination.totalItems,
          totalPages: response.data.pagination.totalPages,
          itemsPerPage: response.data.pagination.itemsPerPage,
        });
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [storeId, pagination.currentPage]);

  // Pagination Handler
  const handlePageChange = (newPage) => {
    console.log("====================================");
    console.log(newPage);
    console.log("====================================");
    const nextPage = parseInt(newPage, 10); // Ensure the page is treated as a number
    if (nextPage >= 1 && nextPage <= pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        currentPage: nextPage,
      }));
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Inventory</h1>
        <Button>Add item</Button>
      </div>
      {!loading && inventory.length > 0 ? (
        <>
          {/* Pagination Controls */}
          <div className="w-full flex justify-center items-center gap-4 mt-6 pb-6">
            <Button
              onClick={() =>
                handlePageChange(Number(pagination.currentPage) - 1)
              }
              disabled={pagination.currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-lg">
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <Button
              onClick={() =>
                handlePageChange(Number(pagination.currentPage) + 1)
              }
              disabled={pagination.currentPage === pagination.totalPages}
            >
              Next
            </Button>
          </div>
          
          <div className="w-full px-12 grid grid-cols-4 gap-6 pb-12">
            {inventory.map((item, i) => {
              return (
                <div key={i}>
                  <InventoryCard item={item} />
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="w-full flex justify-center items-center gap-4 mt-6 pb-24">
            <Button
              onClick={() =>
                handlePageChange(Number(pagination.currentPage) - 1)
              }
              disabled={pagination.currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-lg">
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <Button
              onClick={() =>
                handlePageChange(Number(pagination.currentPage) + 1)
              }
              disabled={pagination.currentPage === pagination.totalPages}
            >
              Next
            </Button>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
