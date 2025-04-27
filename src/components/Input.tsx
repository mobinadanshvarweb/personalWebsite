import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

type InputProps = {
  type?: string;
  placeholder?: string;
  className?: string;
  setValueAction?: (value: string) => { type: string; payload: string };
  value?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
};

const Input = ({
  type,
  placeholder,
  className,
  setValueAction,
  value,
  name,
  id,
  disabled,
}: InputProps) => {
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValueAction) {
      dispatch(setValueAction(e.target.value));
    }
  };
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      type={type}
      disabled={disabled}
      className={`w-full outline-none border border-[#939393a8] p-3 text-[#939393a8] placeholder:text-[#939393bd]  transition-all duration-200 focus:ring-1 focus:ring-gray-500 ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
