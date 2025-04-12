import SideBar from "./SideBar";

const MobileSideBar = ({
  menu,
  setMenu,
  mode,
}: {
  menu: boolean;
  setMenu: (x: boolean) => void;
  mode: boolean;
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
        <SideBar text="home" src="home" />
        <SideBar text="about" src="about" />
        <SideBar text="service" src="services" />
        <SideBar text="portfolio" src="portfolio" />
        <SideBar text="contact" src="contact" />
      </ul>
    </div>
  );
};

export default MobileSideBar;
