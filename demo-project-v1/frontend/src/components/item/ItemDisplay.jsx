import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, IconButton } from "@material-tailwind/react";
import GlassesImg from "../../assets/istockphoto-867290292-612x612.jpg";

export default function ItemDisplay() {
  return (
    <div className="w-full ">
      <Card className="bg-black duration-100 border-[1px] border-blue-300 hover:shadow-md hover:shadow-blue-300">
        <CardBody>
          <div className="min-h-40">
            <div className=" w-full mb-3 aspect-square">
              <img
                src={GlassesImg}
                alt=""
                className="w-full aspect-square rounded-lg"
              />
            </div>
            <div className=" mb-3">
              <div className=" text-white font-semibold text-lg ">
                <p className=" truncate">Glasses name lor</p>
              </div>
              <div className=" text-blue-300 font-semibold">
                <span className=" before:content-['$']">100</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <IconButton color="red">
                <FontAwesomeIcon icon={faHeart} />
              </IconButton>
              <Button
                variant="outlined"
                color="white"
                className="flex justify-center items-center gap-2 "
              >
                <FontAwesomeIcon icon={faCartPlus} />
                <span>Add to cart</span>
              </Button>
              <Button color="light-blue">Buy now</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
