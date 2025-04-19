import { ReactNode } from "react";

const ContactCarts = ({
  icon,
  content,
}: {
  icon: ReactNode;
  content: ReactNode;
}) => {
  return (
    <div className="m-full lg:w-3/12 p-4 flex flex-col justify-center items-center gap-4 border border-[#939393bd] text-[#767676]">
      <span>{icon}</span>
      <span>{content}</span>
    </div>
  );
};

export default ContactCarts;
