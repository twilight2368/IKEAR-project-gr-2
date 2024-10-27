import LogoSVG from "../../assets/icons/polar-bear.svg";
export default function LogoApp() {
  return (
    <>
      <div className=" flex gap-1 h-full w-full justify-center items-center select-none hover:cursor-pointer">
        <div className="h-full p-3 pr-1">
          <img src={LogoSVG} alt="Logo" className="h-full aspect-square" />
        </div>
        <div className=" font-black text-xl ">
          <span>IKEAR</span>
        </div>
      </div>
    </>
  );
}
