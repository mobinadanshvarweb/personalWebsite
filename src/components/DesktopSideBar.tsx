import SideBar from "./SideBar";

const DesktopSideBar = ({ mode }: { mode: boolean }) => {
  return (
    <div
      className={`w-1/4 min-h-screen border  hidden lg:flex justify-center items-start transition-all  duration-500 ${
        mode ? "bg-white border-gray-300" : "bg-black border-gray-500"
      }`}
    >
      <div className="flex flex-col  gap-18 w-7/12 mt-20">
        <div className="flex flex-col gap-10">
          <h1
            className={`font-extrabold capitalize text-xl tracking-widest cursor-default transition-all  duration-500 ${
              mode ? "text-black" : "text-white"
            }`}
          >
            mowin dj
          </h1>
          <ul className="flex flex-col uppercase gap-4 text-[13px] ">
            <SideBar mode={mode} text="home" src="home" />
            <SideBar mode={mode} text="about" src="about" />
            <SideBar mode={mode} text="service" src="services" />
            <SideBar mode={mode} text="portfolio" src="portfolio" />
            <SideBar mode={mode} text="contact" src="contact" />
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
