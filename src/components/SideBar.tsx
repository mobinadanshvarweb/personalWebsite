import { NavLink } from "react-router";

const SideBar = ({ text, src }: { text: string; src: string }) => {
  return (
    <NavLink
      to={src}
      className={({ isActive }) =>
        `cursor-pointer transition-all font-display font-medium hover:text-black ${
          isActive ? "text-black" : "text-[#767676] hover:text-[#767676]"
        }`
      }
    >
      {text}
    </NavLink>
  );
};

export default SideBar;
