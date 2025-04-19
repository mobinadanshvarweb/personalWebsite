import { Outlet } from "react-router";
import { useState } from "react";
import DarkMode from "./components/DarkMode";
import MobileSideBar from "./components/MobileSideBar";
import HamburgurMenu from "./components/HamburgurMenu";
import DesktopSideBar from "./components/DesktopSideBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import MultiLanguage from "./components/MultiLanguage";
import FaLayOut from "./components/FaLayOut";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  const lightMode = useSelector((state: RootState) => state.mode.lightMode);
  const EnOrFa = useSelector((state: RootState) => state.mode.EnOrFa);
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-1 ">
        <div
          className={`w-full h-auto overflow-x-hidden relative lg:min-h-screen   flex flex-col lg:flex-row  transition-all  duration-500
            ${EnOrFa ? "font-display" : "font-farsi"}
             ${lightMode ? "bg-[#f9f9f9]" : "bg-[#393838]"}`}
        >
          {/* Mobile */}
          <HamburgurMenu menu={menu} setMenu={setMenu} mode={lightMode} />
          <MobileSideBar
            lang={EnOrFa}
            menu={menu}
            setMenu={setMenu}
            mode={lightMode}
          />
          {/* Desktop */}
          {EnOrFa ? (
            <>
              <DesktopSideBar lang={EnOrFa} mode={lightMode} />
              <div
                className="flex-1  mb-10 flex flex-col w-full min-h-screen lg:justify-start gap-20 p-6 lg:items-center"
                onClick={() => {
                  setMenu(false);
                }}
              >
                <div className="w-full hidden lg:flex justify-end">
                  <div className="w-2/12 rounded-3xl  px-3 py-1 flex justify-between items-center">
                    <DarkMode />
                    <span className="flex w-[0.5px] h-full bg-[#767676]"></span>
                    <MultiLanguage />
                  </div>
                </div>

                <Outlet />
              </div>
            </>
          ) : (
            <FaLayOut mode={lightMode} setMenu={setMenu} lang={EnOrFa} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
