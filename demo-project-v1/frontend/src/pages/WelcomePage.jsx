import Logo from "../assets/img/icons/cool.png";
import { Button } from "@material-tailwind/react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-black">
      <div className=" min-h-screen">
        <div className="w-full h-screen section-cover-one-background">
          <div className="w-full h-full bg-black/60 ">
            <div className=" h-20 p-2 text-white flex flex-row justify-between items-center">
              <div className="h-full flex flex-row gap-3 items-center pl-12">
                <img src={Logo} alt="" className=" h-12 aspect-square" />
                <span className=" text-3xl font-bold ">vO-Ov</span>
              </div>
              <div className=" flex justify-center items-center gap-6 pr-12">
                <Button
                  className=" border-[1px] border-blue-400 "
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  className=" border-[1px] border-pink-400 "
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-6 ">
              <div className=" text-3xl font-bold text-white text-center">
                Glasses for every species, in every dimension
                <br />
                Whether they’ve got three eyes, one eye, or no eyes
                <br />
                <span className=" text-sm text-gray-500 italic">
                  Yeah, even eyeless species are gonna want our glasses 'cause
                  they're that cool!
                </span>
              </div>
              <div className=" text-center w-1/2 text-white ">
                These aren't just ordinary glasses.{" "}
                <span className=" text-xl text-orange-800 font-black italic">
                  No way!!!
                </span>{" "}
                These bad boys are your one-way ticket to a multiverse joyride!
                With{" "}
                <span className=" text-lg font-bold text-blue-300  italic">
                  vO-Ov Dimensional Glasses™
                </span>
                , you don’t just see things differently—you get transported to
                whole new universes.
                <span className=" text-lg text-red-300 font-bold italic">
                  {" "}
                  Slap 'em on, and boom
                </span>
                , you’re in a dimension where everyone’s a sentient avocado or
                where gravity runs sideways. It's like a reality-flipping
                amusement park ride for your eyes!
                <div className=" text-red-400 text-sm mt-2">
                  * No portal gun required!
                </div>
              </div>
              <div>
                <Button
                  className=" border-green-400 border-2"
                  onClick={() => {
                    navigate("/store");
                  }}
                >
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
