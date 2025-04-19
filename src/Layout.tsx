import { Outlet } from "react-router";
import { useState } from "react";
import DarkMode from "./components/DarkMode";
import MobileSideBar from "./components/MobileSideBar";
import HamburgurMenu from "./components/HamburgurMenu";
import DesktopSideBar from "./components/DesktopSideBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  const lightMode = useSelector((state: RootState) => state.mode.lightMode);
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-1 ">
        <div
          className={`w-full h-auto overflow-x-hidden relative lg:min-h-screen   flex flex-col lg:flex-row font-display transition-all  duration-500 ${
            lightMode ? "bg-[#f9f9f9]" : "bg-[#393838]"
          }`}
        >
          {/* Mobile */}
          <HamburgurMenu menu={menu} setMenu={setMenu} mode={lightMode} />
          <MobileSideBar menu={menu} setMenu={setMenu} mode={lightMode} />
          {/* Desktop */}
          <DesktopSideBar mode={lightMode} />
          <div
            className="flex-1  mb-10 flex flex-col w-full min-h-screen lg:justify-start gap-20 p-6 lg:items-center"
            onClick={() => {
              setMenu(false);
            }}
          >
            <div className="w-full hidden lg:flex justify-end">
              <DarkMode />
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
