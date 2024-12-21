import React from "react";
import StoreMap from "../../components/map/StoreMap";
import { Typography } from "@material-tailwind/react";
import { Footer } from "../../components/footer/Footer";

export default function StoreDetail() {
  const date = new Date();
  return (
    <div className=" w-full">
      <div className="w-full min-h-96 flex flex-row gap-6 ">
        <div className="w-1/2 p-6 pt-12 ">
          <div className=" w-full mb-12 ">
            <h2 className=" text-4xl font-bold">Store name</h2>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              earum harum blanditiis id beatae ratione voluptates facilis,
              tempora dolorum a cumque enim provident voluptate in ut sunt
              molestiae, corporis libero?
            </div>
          </div>
          <div className="w-full mb-6">
            <h3 className=" text-2xl font-bold">Contact information</h3>
            <div className="w-full py-3 px-12">
              <ul className=" list-disc">
                <li>
                  <span>Phone number: </span>
                  <span>000-000-0000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mb-12">
            <h3 className=" text-2xl font-bold">Address</h3>
            <p className="w-full">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae repellendus accusantium culpa doloribus! Ad unde
              aperiam optio nisi neque vero odit repellendus eaque impedit fuga!
              Nisi odio quidem dolorum veniam.
            </p>
          </div>
          <div className=" w-full">
            <table className="table">
              <thead>
                <tr className=" text-black ">
                  <th>Day</th>
                  <th>Time open</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday - Friday</td>
                  <td>00:00 - 24:00</td>
                </tr>

                <tr>
                  <td>Saturday - Sunday</td>
                  <td>00:00 - 24:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/2">
          <StoreMap />
        </div>
      </div>
      <div className="w-full ">
        <Footer />
      </div>
    </div>
  );
}
