import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { RootState } from "../../redux/store";
import FaAbout from "./FaAbout";

const About = () => {
  const lightMode = useSelector((state: RootState) => state.mode.lightMode);
  const EnOrFa = useSelector((state: RootState) => state.mode.EnOrFa);

  return (
    <>
      {EnOrFa ? (
        <div className="flex flex-col text-sm">
          <div className="w-full flex flex-wrap justify-between">
            <div className="flex  justify-center items-start flex-col w-full mb-10 lg:mb-0 lg:w-5/12 gap-8">
              <h2 className="tracking-[5px] text-xl font-bold uppercase">
                // Biography
              </h2>
              <p className="text-[#767676] font-medium text-sm leading-8 break-keep">
                Hi! I'm Mobina Daneshvar, a frontend developer specialized in
                React and Next.js. I enjoy building fast, modern user interfaces
                and focus on implementing clean and precise code. This website
                is my personal space to showcase my projects and step into new
                professional collaborations.
              </p>
              <a href="/img/cv.zip" download="cv.zip">
                <Button text="DOWNLOAD CV" mode={lightMode} />
              </a>
            </div>
            <div className="flex flex-col w-full lg:w-5/12 gap-8">
              <h2 className="tracking-[5px] text-xl font-bold uppercase">
                // Personal Details
              </h2>
              <ul className="w-full cursor-default">
                <li className="flex gap-12 leading-9 ">
                  <span className="w-3/12 font-medium ">Name:</span>
                  <span className="text-[#767676]">Mobina Daneshvar</span>
                </li>
                <li className="flex gap-12 leading-9">
                  <span className="w-3/12 font-medium ">Address:</span>
                  <span className="text-[#767676]">Tehran, Iran</span>
                </li>
                <li className="flex gap-12 leading-9">
                  <span className="w-3/12 font-medium ">Study:</span>
                  <span className="text-[#767676]">Univercity of Semnan</span>
                </li>
                <li className="flex gap-12 leading-9">
                  <span className="w-3/12 font-medium ">Degree:</span>
                  <span className="text-[#767676]">
                    B.Sc. in Computer Science
                  </span>
                </li>
                <li className="flex gap-12 leading-9">
                  <span className="w-3/12 font-medium ">Mail:</span>
                  <span className="text-[#767676] relative group transition-all duration-500">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mobinadanshvar@gmail.com"
                      target="_blank"
                    >
                      mobinadanshvar@gmail.com
                    </a>
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black group-hover:w-full   transition-all duration-500"></span>
                  </span>
                </li>
                <li className="flex gap-12 leading-9">
                  <span className="w-3/12 font-medium ">Phone:</span>
                  <span className="text-[#767676] relative group transition-all duration-500">
                    <a href="tel:+989912050316">+98 991 205 03 16</a>
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black group-hover:w-full transition-all duration-500"></span>
                  </span>
                </li>
                <li className="flex gap-12 leading-9">
                  <span className="w-3/12 font-medium ">Freelance:</span>
                  <span className="text-[#767676]">Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <FaAbout mode={lightMode} lang={EnOrFa} />
      )}
    </>
  );
};

export default About;
