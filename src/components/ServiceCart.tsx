import { ReactNode } from "react";

const ServiceCart = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) => {
  return (
    <div className="w-full lg:w-4/12 flex flex-col gap-6 justify-start items-start border border-gray-400/20 p-10 ">
      <span className="flex w-full">{icon}</span>
      <h3 className="font-bold text-black">{title}</h3>
      <span className="w-full h-[0.5px] bg-gray-300"></span>
      <ul className="flex flex-col gap-2 w-full list-disc list-inside text-[#767676]">
        {items.map((item, index) => (
          <li key={index} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCart;
