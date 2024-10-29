import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
export default function MenuFilter() {
  return (
    <div className="w-full h-full flex flex-row items-center gap-12 justify-end">
      <div className="w-1/6">
        <Select label="Sort" color="gray" className="w-full">
          <Option>New</Option>
          <Option>Rating</Option>
          <Option>Popular</Option>
        </Select>
      </div>
      <div className="w-1/6">
        <Select label="Price" color="gray">
          <Option>High</Option>
          <Option>Medium</Option>
          <Option>Low</Option>
        </Select>
      </div>
      <div className="w-1/6">
        <Select label="Color" color="gray">
          <Option>Color</Option>
          <Option>Color</Option>
          <Option>Color</Option>
        </Select>
      </div>
      <div className="w-1/6">
        <Select label="Size" color="gray">
          <Option>Big</Option>
          <Option>Medium</Option>
          <Option>Small</Option>
        </Select>
      </div>
      <div className="w-1/3">
        <Input label="Name" color="gray" />
      </div>
    </div>
  );
}
