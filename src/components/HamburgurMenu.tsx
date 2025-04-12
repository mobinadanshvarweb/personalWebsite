import { IoMenu, IoClose } from "react-icons/io5";

const HamburgurMenu = ({
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
      className={`w-full h-10 mb-10  flex justify-between items-center p-3 lg:hidden ${
        mode ? "bg-white" : "bg-black"
      }`}
    >
      <h1
        className={`font-extrabold capitalize text-xs tracking-widest cursor-default ${
          mode ? "text-black" : "text-white"
        }`}
      >
        mowin dj
      </h1>
      {menu ? (
        <IoClose
          color={`${mode ? "black" : "white"}`}
          size={28}
          onClick={() => {
            setMenu(!menu);
          }}
        />
      ) : (
        <IoMenu
          color={`${mode ? "black" : "white"}`}
          size={28}
          onClick={() => {
            setMenu(!menu);
          }}
        />
      )}
    </div>
  );
};

export default HamburgurMenu;
