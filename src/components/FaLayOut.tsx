import { Outlet } from "react-router";
import DarkMode from "./DarkMode";
import MultiLanguage from "./MultiLanguage";
import DesktopSideBar from "./DesktopSideBar";

const FaLayOut = ({
  setMenu,
  mode,
}: {
  setMenu: (x: boolean) => void;
  mode: boolean;
}) => {
  return (
    <>
      <div
        className="flex-1  mb-10 flex flex-col w-full min-h-screen lg:justify-start gap-20 p-6 lg:items-center"
        onClick={() => {
          setMenu(false);
        }}
      >
        <div className="w-full hidden lg:flex justify-start">
          <div className="w-2/12 rounded-3xl shadow-2xs  px-3 py-1 flex justify-between items-center">
            <DarkMode />
            <span className="flex w-[0.5px] h-full bg-[#767676]"></span>
            <MultiLanguage />
          </div>
        </div>

        <Outlet />
      </div>
      <DesktopSideBar mode={mode} />
    </>
  );
};

export default FaLayOut;
