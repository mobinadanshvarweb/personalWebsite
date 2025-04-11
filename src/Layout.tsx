import { Outlet } from "react-router";
import SideBar from "./components/SideBar";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-1 ">
        <div className="w-full h-auto overflow-x-hidden relative lg:min-h-screen  bg-[#f9f9f9] flex flex-col lg:flex-row font-display">
          <div className="w-full h-10 mb-10 bg-white flex justify-between items-center p-3 lg:hidden">
            <h1 className="font-extrabold capitalize text-xs tracking-widest cursor-default">
              mowin dj
            </h1>
            {menu ? (
              <IoClose
                size={28}
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            ) : (
              <IoMenu
                size={28}
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            )}
          </div>

          <div
            className={`absolute right-0 top-0 bg-white shadow w-52 min-h-screen mt-10 flex flex-col lg:hidden transition-all duration-500 ${
              menu ? "translate-x-[0]" : "translate-x-[100%]"
            }`}
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

          <div className="w-1/4 min-h-screen border border-gray-300  bg-white hidden lg:flex justify-center items-start">
            <div className="flex flex-col  gap-18 w-7/12 mt-20">
              <div className="flex flex-col gap-10">
                <h1 className="font-extrabold capitalize text-xl tracking-widest cursor-default">
                  mowin dj
                </h1>
                <ul className="flex flex-col uppercase gap-4 text-[13px] ">
                  <SideBar text="home" src="home" />
                  <SideBar text="about" src="about" />
                  <SideBar text="service" src="services" />
                  <SideBar text="portfolio" src="portfolio" />
                  <SideBar text="contact" src="contact" />
                </ul>
              </div>
              <span className="text-[#999] flex flex-col gap-2">
                <p className="text-sm">© 2025 mowin</p>
                <p className="flex gap-1">
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
          <div
            className="flex-1  mb-10 flex w-full min-h-screen lg:justify-center lg:items-center"
            onClick={() => {
              setMenu(false);
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
