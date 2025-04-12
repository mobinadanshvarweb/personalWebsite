import { IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { RiMoonClearLine } from "react-icons/ri";
import { setLightMode } from "../redux/slice/multi-mood-slice";
const DarkMode = () => {
  const lightMode = useSelector((state: RootState) => state.mode.lightMode);
  const dispatch = useDispatch();
  return (
    <div
      className={`relative w-10 h-7 px-6 rounded-3xl  bg-[#767676]  cursor-pointer transition-all duration-300  ${
        lightMode ? " bg-[#767676]" : " bg-black"
      }`}
      onClick={() => {
        dispatch(setLightMode(!lightMode));
      }}
    >
      <span
        className={`flex justify-center items-center transition-all duration-300 w-5 h-5 rounded-full  absolute top-[50%]   translate-y-[-50%] bg-white ${
          lightMode ? "right-1" : "left-1"
        }`}
      >
        {lightMode ? <IoSunnyOutline size={13} /> : <RiMoonClearLine />}
      </span>
    </div>
  );
};

export default DarkMode;
