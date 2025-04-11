import { Link } from "react-router";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex mx-6 w-full">
      <div className="w-full flex flex-wrap justify-between h-full items-start">
        <div className="order-2 lg:order-1 flex gap-8 flex-col w-full mb-10 lg:mb-0 lg:w-6/12">
          <h2 className="mb-4 text-lg text-[#767676] uppercase">
            // Mobina Daneshvar
          </h2>
          <h3 className="uppercase font-bold tracking-wider text-2xl">
            Creative
            <br />
            Frontend developer
          </h3>
          <span className="flex-1"></span>
          <Link to="/portfolio">
            <Button text="view portfolio" />
          </Link>
        </div>
        <div className="order-1 lg:order-2 group w-6/12 h-80 flex m-6 lg:m-0">
          <div className="group-hover:scale-90 transition-all duration-500 w-full lg:w-10/12 h-full border border-gray-500/15 flex justify-center items-center">
            <div className="w-11/12 h-11/12  group-hover:scale-125 transition-all duration-500">
              <img
                src="/img/3.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
