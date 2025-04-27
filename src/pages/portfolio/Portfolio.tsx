import Carts from "./Carts";
import portfolioArr from "../../data/portfolioData";
const Portfolio = () => {
  return (
    <div className="flex  w-full">
      <div className="w-full flex flex-col gap-8">
        <h2 className="tracking-[5px] text-xl font-bold uppercase">
          // Creative Portfolio
        </h2>
        <div className="flex flex-wrap lg:justify-between gap-8">
          {portfolioArr.map((item) => {
            return (
              <div key={item.id} className="w-full  lg:w-[30%] xl:w-[30.9%]">
                <Carts
                  src={item.src}
                  title={item.title}
                  desc={item.desc}
                  id={item.id}
                  about={item.about}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
