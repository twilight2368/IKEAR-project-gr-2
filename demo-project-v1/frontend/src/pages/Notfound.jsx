import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import FooterDisplay from "../components/footer/FooterDisplay";
import "./styles.css";
export default function Notfound() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" not-found-page h-screen w-full ">
        <div className="w-full h-full bg-black/50 text-white">
          <div className=" w-full h-[65vh] flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center gap-6 ">
              <FontAwesomeIcon
                icon={faFaceSadTear}
                className=" text-9xl mb-0 "
              />
              <h1 className=" text-4xl font-bold ">Page not found</h1>
              <div>
                <Button
                  color="deep-purple"
                  onClick={() => {
                    navigate("/store");
                  }}
                >
                  Go to store
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full text-white">
            <FooterDisplay />
          </div>
        </div>
      </div>
    </>
  );
}
