import React from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { FaStoreAlt } from "react-icons/fa";
import StoreDrawerContent from "./StoreDrawerContent";
export default function StorePickerDrawer() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Button
        variant="outlined"
        color="gray"
        className=" border-black text-black flex flex-row items-center gap-2"
        onClick={openDrawer}
      >
        <FaStoreAlt />
        <span className="ibm-font font-black ">Ikear store</span>
      </Button>
      <Drawer
        open={open}
        onClose={closeDrawer}
        overlay={false}
        placement="right"
        size={600}
        color="gray"
        className=" border-black border-l-2 shadow-md shadow-black z-[100]"
      >
        <StoreDrawerContent onClose={closeDrawer} />
      </Drawer>
    </>
  );
}
