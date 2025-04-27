import Carts from "./Carts";

const Portfolio = () => {
  return (
    <div className="flex  w-full">
      <div className="w-full flex flex-col gap-8">
        <h2 className="tracking-[5px] text-xl font-bold uppercase">
          // Creative Portfolio
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <div className="w-full lg:w-1/3">
            <Carts src="/img/port.jpg" title="title" desc="description" />
          </div>
          <div className="w-full lg:w-1/3">
            <Carts src="/img/port.jpg" title="title" desc="description" />
          </div>
          <div className="w-full lg:w-1/3">
            <Carts src="/img/port.jpg" title="title" desc="description" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
