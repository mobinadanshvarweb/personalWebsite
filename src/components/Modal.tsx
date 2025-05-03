import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../redux/slice/multi-mood-slice";
import { RootState } from "../redux/store";

const Modal = () => {
  const selectedCart = useSelector(
    (state: RootState) => state.mode.selectedCart
  );
  const dispatch = useDispatch();

  // اگر هیچ چیزی انتخاب نشده باشه، مدال نمایش داده نمیشه
  if (!selectedCart) return null;

  return (
    <div
      dir={selectedCart.lang ? "ltr" : "rtl"}
      className="w-full h-full lg:h-[100vh] fixed top-0 left-0 bg-black/80 flex justify-center items-center z-50 "
    >
      {/* محتویات مدال */}
      <div className="bg-white p-6 flex flex-col gap-4 w-8/12 h-[80%] overflow-y-auto relative">
        {/* عکس */}
        <div className="w-full h-[400px]">
          <img
            src={selectedCart.src}
            alt={selectedCart.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* توضیحات */}
        <figcaption className="flex flex-col gap-1 justify-center items-start lg:px-4">
          <h3 className="text-black text-2xl font-bold capitalize">
            {selectedCart.title}
          </h3>
          <p className="text-[#767676] text-sm capitalize">
            {selectedCart.desc}
          </p>
        </figcaption>

        {/* محتوای بیشتر */}
        <p className="w-full text-justify text-[#767676]">
          {selectedCart.about}
        </p>

        {/* دکمه بستن */}
      </div>
      <span
        onClick={() => {
          dispatch(setModal(false));
        }}
        className="absolute left-[85%] top-[10%] flex justify-center items-center p-1 lg:p-4 border-2 border-white hover:rounded-4xl transition-all duration-300 cursor-pointer z-50"
      >
        <IoClose size={20} color="white" />
      </span>
    </div>
  );
};

export default Modal;
