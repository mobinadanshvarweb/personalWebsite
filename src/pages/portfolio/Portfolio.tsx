import Carts from "./Carts";
// import portfolioArr from "../../data/portfolioData";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import personalArr from "../../data/portfolio/personal-website-data";
import landingArr from "../../data/portfolio/landing-page-data";
import projectArr from "../../data/portfolio/personal-project-data";

const Portfolio = () => {
  const EnOrFa = useSelector((state: RootState) => state.mode.EnOrFa);

  return (
    <div dir={EnOrFa ? "ltr" : "rtl"} className="flex  w-full">
      <div className="w-full flex flex-col gap-8">
        <h2 className="tracking-[5px] text-xl font-bold uppercase">
          {EnOrFa ? " // Creative Portfolio" : "//نمونه کارها"}
        </h2>
        <div className="w-full  flex justify-end">
          <TabGroup className="w-full">
            <TabList className=" flex justify-between lg:justify-end gap-4 mb-8 ">
              <Tab
                className={({ selected }) =>
                  ` transition-colors duration-200 ${
                    selected ? "text-black font-semibold" : "text-[#767676]"
                  }`
                }
              >
                {EnOrFa ? "Personal Website" : "وب سایت شخصی"}
              </Tab>
              <Tab
                className={({ selected }) =>
                  `  transition-colors duration-200 ${
                    selected ? "text-black font-semibold" : "text-[#767676]"
                  }`
                }
              >
                {EnOrFa ? "Landing Page" : "وب سایت شخصی"}
              </Tab>
              <Tab
                className={({ selected }) =>
                  ` transition-colors duration-200 ${
                    selected ? "text-black font-semibold" : "text-[#767676]"
                  }`
                }
              >
                {EnOrFa ? "Personal Website" : "پروژه تمرینی"}
              </Tab>
            </TabList>
            <TabPanels className="w-full ">
              <TabPanel className="flex flex-wrap lg:justify-between gap-8">
                {personalArr.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-full  lg:w-[30%] xl:w-[30.9%]"
                    >
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
              </TabPanel>
              <TabPanel className="flex flex-wrap lg:justify-between gap-8">
                {landingArr.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-full  lg:w-[30%] xl:w-[30.9%]"
                    >
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
              </TabPanel>
              <TabPanel className="flex flex-wrap lg:justify-between gap-8">
                {projectArr.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-full  lg:w-[30%] xl:w-[30.9%]"
                    >
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
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
