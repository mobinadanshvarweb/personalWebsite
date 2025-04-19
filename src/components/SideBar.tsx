import { NavLink } from "react-router";

const SideBar = ({
  text,
  src,
  mode,
  lang,
}: {
  text: string;
  src: string;
  mode: boolean;
  lang: boolean;
}) => {
  return (
    <NavLink
      to={src}
      className={({ isActive }) =>
        `cursor-pointer transition-all duration-500 flex justify-center 
        ${lang ? "lg:justify-start" : "lg:justify-end"}
        ${mode ? "hover:text-black" : "hover:text-white"}
       hover:text-black ${
         isActive && mode
           ? "text-black font-bold"
           : `text-[#767676] hover:text-[#767676]  ${
               isActive && !mode ? "text-white font-bold" : "font-medium"
             }`
       }`
      }
    >
      {text}
    </NavLink>
  );
};

export default SideBar;
