const Carts = ({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) => {
  return (
    <figure
      className="w-full h-[360px] border border-black/40
 flex flex-col gap-4 p-3"
    >
      <div className="cursor-pointer group w-full h-3/4  flex justify-center items-center relative overflow-hidden">
        <img src={src} className="object-cover w-full h-full" alt="" />
        <span className="absolute flex w-[300%] h-full bg-white/50 rotate-[30deg] translate-x-[120%] -translate-y-[50%] group-hover:-translate-x-[120%] group-hover:translate-y-[50%] transition-all duration-700 ease-in"></span>
      </div>
      <span className="w-full h-[0.5px] bg-black/40"></span>
      <figcaption className="flex flex-col gap-1 justify-center items-start px-4">
        <h3 className="text-black text-2x font-bold cursor-pointer capitalize">
          {title}
        </h3>
        <p className="text-[#767676] text-sm cursor-pointer capitalize">
          {desc}
        </p>
      </figcaption>
    </figure>
  );
};

export default Carts;
