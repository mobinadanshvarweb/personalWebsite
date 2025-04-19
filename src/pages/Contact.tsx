import ContactCarts from "../components/ContactCarts";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import Input from "../components/Input";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Contact = () => {
  const lightMode = useSelector((state: RootState) => state.mode.lightMode);

  return (
    <div className="w-full flex flex-col !font-display gap-8">
      <h2 className="tracking-[5px] text-xl font-bold uppercase mb-10">
        // get in touch
      </h2>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row  justify-around gap-12">
          <ContactCarts
            content={<a className="font-display">Iran, Tehran</a>}
            icon={<IoLocationOutline size={30} />}
          />
          <ContactCarts
            content={
              <span className="text-[#767676] relative group transition-all duration-500">
                <a
                  className="text-center flex justify-center"
                  href="tel:+989912050316"
                >
                  +98 991 205 03 16
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black group-hover:w-full transition-all duration-500"></span>
              </span>
            }
            icon={<LuPhone size={30} />}
          />
          <ContactCarts
            content={
              <span className="text-[#767676] relative group transition-all duration-500 whitespace-break-spaces break-words flex justify-center">
                <a
                  className="text-center"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mobinadanshvar@gmail.com"
                  target="_blank"
                >
                  mobinadanshvar
                  <br />
                  @gmail.com
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black group-hover:w-full   transition-all duration-500"></span>
              </span>
            }
            icon={<HiOutlineMail size={30} />}
          />
          <ContactCarts
            content={<a className="font-display">Iran, Tehran</a>}
            icon={<BsChatDots size={30} />}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-1/2 ">
              <Input placeHolder="Name" type="text" />
            </div>
            <div className="w-full lg:w-1/2 ">
              <Input placeHolder="Email" type="text" />
            </div>
          </div>
          <div className="w-full">
            <textarea
              className="w-full outline-none border border-[#939393a8] p-3 text-[#939393bd] resize-none"
              placeholder="Message"
              name=""
              id=""
            ></textarea>
          </div>
          <Button mode={lightMode} text="Send Message" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
