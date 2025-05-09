const Button = ({ text, mode }: { text: string; mode: boolean }) => {
  return (
    <button
      type="submit"
      className="group transition-all  duration-500 overflow-hidden relative w-46 px-6 py-7 flex justify-center items-center text-white bg-[#767676] font-medium uppercase cursor-pointer"
    >
      <span
        className={`group-hover:-top-[100%]  transition-all duration-500 absolute left-0 top-0 flex justify-center items-center w-full h-full text-white   ${
          mode ? "bg-[#767676]" : "bg-black"
        }`}
      >
        {text}
      </span>
      <span
        className={`group-hover:top-[0] flex transition-all duration-500 absolute left-0 top-[100%] group-hover:opacity-100 justify-center items-center w-full h-full text-white  ${
          mode ? "bg-black" : "bg-[#767676]"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
