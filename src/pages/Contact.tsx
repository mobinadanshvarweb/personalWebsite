import ContactCarts from "../components/ContactCarts";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { persianDigit } from "../util/persianDigit";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";

const Contact = () => {
  const EnOrFa = useSelector((state: RootState) => state.mode.EnOrFa);

  return (
    <div
      dir={EnOrFa ? "ltr" : "rtl"}
      className={`w-full flex flex-col gap-8  ${
        EnOrFa ? "font-display" : "font-farsi"
      }`}
    >
      <h2 className="tracking-[5px] text-xl font-bold uppercase mb-10">
        {EnOrFa ? "// get in touch" : " راه های ارتباطی"}
      </h2>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-around gap-12">
          <ContactCarts
            content={<a>{EnOrFa ? "Iran, Tehran" : "ایران، تهران"}</a>}
            icon={<IoLocationOutline size={30} />}
          />
          <ContactCarts
            content={
              <span className="text-[#767676] relative group transition-all duration-500">
                <a
                  className="text-center flex justify-center"
                  href="tel:+989912050316"
                >
                  {EnOrFa
                    ? " +98 991 205 03 16"
                    : `${persianDigit("09912050316")}`}
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
            content={
              <div className="w-full flex gap-2">
                <a
                  href="https://instagram.com/mobina_daneshvar_web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram />
                </a>
                <a
                  href="https://linkedin.com/in/mobinadaneshvar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin />
                </a>
                <a
                  href="https://t.me/mobindj76"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTelegram2Line />
                </a>
              </div>
            }
            icon={<BsChatDots size={30} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
