import { useState, useEffect } from "react";
import ItemCard from "../../components/admin/ItemCard";
import { Button } from "@material-tailwind/react";
import { AddItemModal } from "../../components/admin/AddItemModal";
import axios from "axios";

export default function AdminItemPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    itemsPerPage: 24, // Adjust items per page
  });

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/service2/item/items",
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
        setItems(response.data.data); // Assuming the response contains 'data'
        setPagination({
          currentPage: response.data.pagination.currentPage,
          totalItems: response.data.pagination.totalItems,
          totalPages: response.data.pagination.totalPages,
          itemsPerPage: response.data.pagination.itemsPerPage,
        });
      } catch (error) {
        console.log("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [pagination.currentPage]);

  // Pagination Handler
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        currentPage: newPage,
      }));
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className="mb-2">Items</h1>
        <AddItemModal />
      </div>

      <div className="w-full min-h-screen px-12 grid grid-cols-4 gap-6 pb-40">
        {loading ? (
          <>Loading...</>
        ) : (
          items.map((item, index) => <ItemCard key={index} item={item} />)
        )}
      </div>

      {/* Pagination Controls */}
      <div className="w-full flex justify-center items-center gap-4 mt-6 pb-24">
        <Button
          onClick={() => handlePageChange(Number(pagination.currentPage) - 1)}
          disabled={pagination.currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-lg">
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <Button
          onClick={() => handlePageChange(Number(pagination.currentPage) + 1)}
          disabled={pagination.currentPage === pagination.totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
