import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Card, CardBody, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

export default function Payment({ clientSecret, handlingSubmitOrder }) {
  const options = {
    clientSecret: clientSecret,
  };

  // useEffect(() => {
  //   console.log("====================================");
  //   console.log(clientSecret, stripePromise);
  //   console.log("====================================");
  // }, []);

  return (
    <div className=" flex flex-col justify-center items-start ">
      {clientSecret && stripePromise ? (
        <>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm handlingSubmitOrder={handlingSubmitOrder} />
          </Elements>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const CheckoutForm = ({ handlingSubmitOrder }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      //! Stripe.js hasn't yet loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required", // Prevent automatic redirect
    });

    if (result.error) {
      toast.error("Payment incompleted");
      console.log(result.error.message);
    } else {
      toast.success("Payment completed");
      await handlingSubmitOrder();
    }
  };

  return (
    <>
      <Card>
        <CardBody>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center items-center gap-12"
          >
            <PaymentElement />
            <Button
              color="gray"
              className="bg-black"
              type="submit"
              disabled={!stripe || !elements || loading}
            >
              {loading ? (
                <>
                  <Spinner className=" h-4 w-4" />
                </>
              ) : (
                <>Confirm Order</>
              )}
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};
