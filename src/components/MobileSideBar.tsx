import DarkMode from "./DarkMode";
import SideBar from "./SideBar";

const MobileSideBar = ({
  menu,
  setMenu,
  mode,
  lang,
}: {
  menu: boolean;
  setMenu: (x: boolean) => void;
  mode: boolean;
  lang: boolean;
}) => {
  return (
    <div
      className={`absolute right-0 top-0  shadow w-52 min-h-screen mt-10 flex flex-col lg:hidden transition-all duration-500  
        ${mode ? "bg-white" : "bg-black"}
        ${menu ? "translate-x-[0]" : "translate-x-[100%]"}`}
    >
      <ul
        className="flex flex-col items-center uppercase gap-8 text-[13px] py-8 "
        onClick={() => {
          setMenu(false);
        }}
      >
        <SideBar
          lang={lang}
          mode={mode}
          text={`${lang ? "home" : "خانه"}`}
          src="home"
        />
        <SideBar
          lang={lang}
          mode={mode}
          text={`${lang ? "about" : "درباره من"}`}
          src="about"
        />
        <SideBar
          lang={lang}
          mode={mode}
          text={`${lang ? "service" : "خدمات"}`}
          src="services"
        />
        <SideBar
          lang={lang}
          mode={mode}
          text={`${lang ? "portfolio" : "نمونه کار"}`}
          src="portfolio"
        />
        <SideBar
          lang={lang}
          mode={mode}
          text={`${lang ? "contact" : "راه ارتباطی"}`}
          src="contact"
        />
        <li
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full py-3 flex justify-center items-center"
        >
          <span className="w-1/2 flex justify-center items-center  border-r-[1px] border-[#767676]">
            <DarkMode />
          </span>
          <span className="w-1/2 flex justify-center items-center "></span>
        </li>
      </ul>
    </div>
  );
};

export default MobileSideBar;
