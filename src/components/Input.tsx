const Input = ({
  type,
  placeHolder,
  classname,
}: {
  type: string;
  placeHolder: string;
  classname?: string;
}) => {
  return (
    <input
      type={type}
      className={`w-full outline-none border border-[#939393a8] p-3 text-[#939393bd] ${classname}`}
      placeholder={placeHolder}
    />
  );
};

export default Input;
