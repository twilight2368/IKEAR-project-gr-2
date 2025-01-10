import { useParams } from "react-router-dom";
import ItemCard from "../../components/items/ItemCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import { Button } from "@material-tailwind/react";

export default function StoreProductItemPage() {
  const { id: item_id } = useParams();
  const [productData, SetProductData] = useState();
  const [dataSample1, setDataSample1] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 30; // Customize items per page

  // Fetch product data
  useEffect(() => {
    setCurrentPage(1);
    axios
      .get("http://localhost:5000/service2/other/products/" + item_id)
      .then((response) => {
        SetProductData(response.data.data);
      });
  }, [item_id]);

  // Fetch paginated items
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/service2/item/items-product/${item_id}?page=${currentPage}&limit=${itemsPerPage}`
        );
        setDataSample1(response.data.data);
        setTotalPages(response.data.metadata.totalPages); // Assuming the backend sends `totalPages` in metadata
      } catch (error) {
        console.error("Error fetching paginated data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [item_id, currentPage]);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full relative">
      <div className="w-full p-6 bg-white flex justify-between items-center mb-16 sticky top-20 z-[1]">
        <div className="w-1/3">
          <h2 className="font-black flex flex-row items-center justify-center">
            <span className="w-1/3 text-sm">Current product: </span>
            <p className="w-2/3 truncate font-normal text-sm pr-6">
              {productData?.name}
            </p>
          </h2>
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="w-full flex justify-center items-center mb-8">
        <Button
          className="px-4 py-2 mx-2 "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          className="px-4 py-2 mx-2 "
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <div className="w-full min-h-screen px-12">
        {loading ? (
          <div className="w-full min-h-screen  flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-5 gap-6">
              {dataSample1.map((data, i) => (
                <ItemCard key={i} item={data} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
