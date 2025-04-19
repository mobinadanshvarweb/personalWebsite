import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setLanguage } from "../redux/slice/multi-mood-slice";

const MultiLanguage = () => {
  const EnOrFa = useSelector((state: RootState) => state.mode.EnOrFa);
  const dispatch = useDispatch();
  return (
    <div
      className={`relative w-10 h-7 px-6 rounded-3xl  bg-[#767676]  cursor-pointer transition-all duration-300  `}
      onClick={() => {
        dispatch(setLanguage(!EnOrFa));
      }}
    >
      <span
        className={`flex justify-center items-center transition-all duration-300 w-5 h-5 rounded-full  absolute top-[50%]   translate-y-[-50%] bg-white ${
          EnOrFa ? "right-1" : "left-1"
        }`}
      >
        {EnOrFa ? (
          <span className="text-xs">EN</span>
        ) : (
          <span className="text-xs">FA</span>
        )}
      </span>
    </div>
  );
};

export default MultiLanguage;
