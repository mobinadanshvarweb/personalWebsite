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
        `cursor-pointer transition-all font-medium flex justify-center 
        ${lang ? "lg:justify-start" : "lg:justify-end"}
        ${mode ? "hover:text-black" : "hover:text-white"}
       hover:text-black ${
         isActive && mode
           ? "text-black"
           : `text-[#767676] hover:text-[#767676] ${
               isActive && !mode ? "text-white" : ""
             }`
       }`
      }
    >
      {text}
    </NavLink>
  );
};

export default SideBar;
