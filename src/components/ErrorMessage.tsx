const ErrorMessage = ({ errors }: { errors?: string }) => {
  return (
    <div className="group w-full h-0   bg-red-200 text-red-900 hover:h-20 transition-all duration-500 flex justify-center items-center">
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
        {errors}
      </span>
    </div>
  );
};

export default ErrorMessage;
