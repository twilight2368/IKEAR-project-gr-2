import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // To get the cart and user from Redux store
import ItemBuying from "../../components/items/ItemBuying";
import {
  Button,
  Card,
  CardBody,
  Option,
  Select,
} from "@material-tailwind/react";
import axios from "axios"; // Import axios
import { toast } from "react-toastify";
import Payment from "./form/Payment";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart); // Get cart data from Redux
  const user = useSelector((state) => state.user.user); // Get user data from Redux
  const [stores, setStores] = useState([]);
  const [store, setStore] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState();
  const [purchaseMethod, setPurchaseMethod] = useState();
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [purchaseMethods, setPurchaseMethods] = useState([]);
  const [client_secret, setClientSecret] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/service1/store/stores")
      .then((response) => {
        setStores(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
    axios
      .get("http://localhost:5000/service4/others/delivery-types")
      .then((response) => {
        setDeliveryOptions(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
    axios
      .get("http://localhost:5000/service4/others/payment-types")
      .then((response) => {
        setPurchaseMethods(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, []);
  const handleOrderSubmit = async () => {
    setLoading(true);

    try {
      // Prepare the order data with the required format for the backend
      const orderData = {
        user: user._id,
        store: store,
        items: cart.items.map((item) => ({
          item: item.id,
          quantity: item.quantity,
        })),
        payment_type: purchaseMethod,
        delivery_type: deliveryOption,
      };

      console.log("====================================");
      console.log(orderData);
      console.log("====================================");

      // Make the API request using Axios
      const response = await axios.post(
        "http://localhost:5000/service4/orders/order",
        orderData
      );

      if (response.data.success) {
        // Handle success (e.g., show success message or redirect)
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
        toast.success("Order placed successfully!");
        navigate("/my-orders");
      } else {
        // Handle error response
        setError("There was an issue placing the order. Please try again.");
      }
    } catch (error) {
      // Catch any error during the API call
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      setError("There was an issue placing the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="w-full px-12 text-2xl font-black mb-6">Payment</div>
      <div className="w-full px-12 flex flex-row gap-6">
        <div className="w-1/2">
          <div className=" max-h-[600px] overflow-y-auto custom-scroll-bar">
            {cart.items.map((item, index) => (
              <ItemBuying key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <Card>
            <CardBody>
              <div className="flex flex-row items-center gap-0">
                <div className="w-1/2">
                  <li>
                    <span>Total products: </span>
                    <span>{cart.totalProducts}</span>
                  </li>
                  <li>
                    <span>Total items: </span>
                    <span>{cart.totalItems}</span>
                  </li>
                </div>
                <div className="w-1/2">
                  <span className="text-sm italic text-gray-600">
                    Total price
                  </span>
                  <p className="truncate text-black font-black text-2xl before:content-['$']">
                    {cart.totalAmount}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                {deliveryOptions && deliveryOptions.length ? (
                  <>
                    <Select
                      label="Delivery Options"
                      value={deliveryOption}
                      onChange={(value) => setDeliveryOption(value)}
                    >
                      {deliveryOptions.map((item) => (
                        <Option key={item} value={item}>
                          <div> {item} </div>
                        </Option>
                      ))}
                    </Select>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="mt-4">
                {purchaseMethods && purchaseMethods.length ? (
                  <>
                    <Select
                      label="Purchase method"
                      value={purchaseMethod}
                      onChange={(value) => setPurchaseMethod(value)}
                    >
                      {purchaseMethods.map((item) => (
                        <Option key={item} value={item}>
                          <div> {item} </div>
                        </Option>
                      ))}
                    </Select>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="mt-4">
                {stores.length && stores ? (
                  <Select
                    label="Store"
                    defaultValue={store}
                    onChange={(value) => setStore(value)}
                    required
                  >
                    {stores.map((store_item) => (
                      <Option key={store_item._id} value={store_item._id}>
                        <div className="font-bold">{store_item.name}</div>
                        <div className="text-xs italic">
                          {store_item.address}
                        </div>
                      </Option>
                    ))}
                  </Select>
                ) : (
                  <></>
                )}
              </div>
              <div className="mt-8 flex justify-center items-center">
                {purchaseMethod === "buy online" ? (
                  <>
                    {client_secret ? (
                      <>
                        {" "}
                        <Payment
                          clientSecret={client_secret}
                          handlingSubmitOrder={handleOrderSubmit}
                        />
                      </>
                    ) : (
                      <>
                        <Button
                          color="gray"
                          className="bg-black"
                          onClick={() => {
                            axios
                              .post(
                                "http://localhost:5000/service4/orders/payment",
                                {
                                  amount: cart.totalAmount,
                                }
                              )
                              .then((response) => {
                                setClientSecret(response.data.clientSecret);
                              })
                              .catch((error) => {
                                toast.error("Payment failed");
                              });
                          }}
                          disabled={loading}
                        >
                          {loading ? "Processing..." : "Payment"}
                        </Button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Button
                      color="gray"
                      className="bg-black"
                      onClick={handleOrderSubmit}
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Confirm Order"}
                    </Button>
                  </>
                )}
              </div>
              {error && <div className="mt-4 text-red-500">{error}</div>}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
