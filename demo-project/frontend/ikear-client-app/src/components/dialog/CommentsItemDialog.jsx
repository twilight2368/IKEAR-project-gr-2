import React from "react";
import { FaStar, FaRegStar, FaUser, FaReply } from "react-icons/fa";

import {
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Rating,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { FaPenAlt, FaRegCommentAlt } from "react-icons/fa";

export default function CommentsItemDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        color="white"
        className="text-black text-xl rounded-full"
      >
        <FaPenAlt />
      </IconButton>
      <Dialog open={open} handler={handleOpen} className=" w-96 h-[60vh]">
        <DialogHeader className=" ibm-font">Write your reviews</DialogHeader>
        <DialogBody>
          <div className="w-full flex flex-row gap-6 items-center mb-3">
            <div className=" font-black text-black ibm-font">Rate</div>
            <Rating
              ratedIcon={<FaStar color="black" />}
              unratedIcon={<FaRegStar color="black" />}
              className="h-full"
            />
          </div>
          <div className="h-96">
            <div className=" font-black text-black ibm-font mb-2">
              Describe your experience
            </div>
            <Textarea
              label="Write your review here..."
              color="gray"
              className="mb-6"
            />
            <div className=" w-full flex flex-col gap-3 justify-center items-center">
              <Button
                color="gray"
                variant="outlined"
                className=" border-black text-black"
              >
                Post
              </Button>
              <Button color="red" onClick={handleOpen}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
