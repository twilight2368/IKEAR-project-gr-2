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
export default function ProfilePage() {
  return (
    <div className=" min-h-screen">
      <div className="flex justify-center items-center bg-gray-100">
        <Card className="w-full max-w-md p-6 m-12 shadow-lg bg-white">
          <div className="flex flex-col items-center">
            <Avatar src={UserLogo} alt="Profile Picture" size="xl" />
            <Typography variant="h5" color="blue-gray" className="mt-4">
              John Doe
            </Typography>
          </div>
          <CardBody>
            <div className="mt-4">
              <Typography variant="h6" color="blue-gray">
                Contact Information
              </Typography>
              <Typography className="text-gray-700 mt-2">
                <strong>Phone:</strong> (123) 456-7890
              </Typography>
              <Typography className="text-gray-700 mt-2">
                <strong>Email:</strong> johndoe@example.com
              </Typography>
            </div>
            <div className="mt-4">
              <Typography variant="h6" color="blue-gray">
                Location
              </Typography>
              <Typography className="text-gray-700 mt-2">
                <strong>Country:</strong> USA
              </Typography>
              <Typography className="text-gray-700 mt-2">
                <strong>City:</strong> New York
              </Typography>
              <Typography className="text-gray-700 mt-2">
                <strong>Address:</strong> 123 Main St
              </Typography>
            </div>
          </CardBody>
          <div className="w-full flex justify-center mt-4">
            <Button
              color="gray"
              className="bg-black"
              onClick={() => alert("Edit Profile Clicked")}
            >
              Edit Profile
            </Button>
          </div>
        </Card>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
