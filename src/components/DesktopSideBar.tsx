import SideBar from "./SideBar";

const DesktopSideBar = ({ mode, lang }: { mode: boolean; lang: boolean }) => {
  return (
    <div
      className={`w-1/4 min-h-screen border  hidden lg:flex justify-center items-start transition-all  duration-500 ${
        mode ? "bg-white border-gray-300" : "bg-black border-gray-500"
      }`}
    >
      <div className="flex flex-col  gap-18 w-7/12 mt-20">
        <div className="flex flex-col gap-10">
          <h1
            className={`font-extrabold capitalize text-xl font-display tracking-widest cursor-default transition-all flex items-center  duration-500
              ${lang ? " justify-start" : " justify-end"}
               ${mode ? "text-black" : "text-white"}`}
          >
            mowin dj
          </h1>
          <ul className="flex flex-col uppercase gap-4 text-[13px] ">
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
          </ul>
        </div>
        <span className="text-[#999] flex flex-col gap-2">
          <p className="text-sm cursor-default">© 2025 mowin</p>
          <p className="flex gap-1 cursor-default">
            Created by
            <a
              href="https://www.linkedin.com/in/mobinadaneshvar"
              target="_blank"
              className="text-[#767676]"
            >
              Mowin
            </a>
          </p>
        </span>
      </div>
    </div>
  );
};

export default DesktopSideBar;
