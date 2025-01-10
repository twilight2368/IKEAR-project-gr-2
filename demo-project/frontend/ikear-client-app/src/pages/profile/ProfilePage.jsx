import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  IconButton,
  Button,
} from "@material-tailwind/react";
import UserLogo from "../../assets/icons/user-svgrepo-com.svg";
import { Footer } from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  return (
    <div className=" min-h-screen">
      <div className="flex justify-center items-center bg-gray-100">
        {user ? (
          <>
            <Card className="w-full max-w-md p-6 m-12 shadow-lg bg-white">
              <div className="flex flex-col items-center">
                <Avatar src={UserLogo} alt="Profile Picture" size="xl" />
                <Typography variant="h5" color="blue-gray" className="mt-4">
                  {user.username}
                </Typography>
              </div>
              <CardBody>
                <div className="mt-4">
                  <Typography variant="h6" color="blue-gray">
                    Contact Information
                  </Typography>
                  <Typography className="text-gray-700 mt-2">
                    <strong>Phone:</strong> {user.phone}
                  </Typography>
                  <Typography className="text-gray-700 mt-2">
                    <strong>Email:</strong> {user.email}
                  </Typography>
                </div>
                <div className="mt-4">
                  <Typography variant="h6" color="blue-gray">
                    Location
                  </Typography>
                  <Typography className="text-gray-700 mt-2">
                    <strong>Country:</strong> {user.country}
                  </Typography>
                  <Typography className="text-gray-700 mt-2">
                    <strong>City:</strong> {user.city}
                  </Typography>
                  <Typography className="text-gray-700 mt-2">
                    <strong>Address:</strong> {user.address}
                  </Typography>
                </div>
              </CardBody>
              <div className="w-full flex justify-center mt-4">
                {/* <Button
              color="gray"
              className="bg-black"
              onClick={() => alert("Edit Profile Clicked")}
            >
              Edit Profile
            </Button> */}
              </div>
            </Card>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
