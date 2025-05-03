import Carts from "./Carts";
import portfolioArr from "../../data/portfolioData";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const Portfolio = () => {
  const EnOrFa = useSelector((state: RootState) => state.mode.EnOrFa);

  return (
    <div dir={EnOrFa ? "ltr" : "rtl"} className="flex  w-full">
      <div className="w-full flex flex-col gap-8">
        <h2 className="tracking-[5px] text-xl font-bold uppercase">
          {EnOrFa ? " // Creative Portfolio" : "//نمونه کارها"}
        </h2>
        <div className="flex flex-wrap lg:justify-between gap-8">
          {portfolioArr.map((item) => {
            return (
              <div key={item.id} className="w-full  lg:w-[30%] xl:w-[30.9%]">
                <Carts
                  src={item.src}
                  title={EnOrFa ? item.title : item.titleFa}
                  desc={EnOrFa ? item.desc : item.descFa}
                  id={item.id}
                  about={EnOrFa ? item.about : item.aboutFa}
                  lang={EnOrFa}
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
