import { NavLink } from "react-router";

const SideBar = ({
  text,
  src,
  mode,
}: {
  text: string;
  src: string;
  mode: boolean;
}) => {
  return (
    <NavLink
      to={src}
      className={({ isActive }) =>
        `cursor-pointer transition-all font-display font-medium
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
