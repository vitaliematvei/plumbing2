import WaterTap from "../../assets/images/WaterTap.png";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl bg-dark-green mx-auto">
      <div className="max-w-[1205px] mx-auto md:flex justify-between">
        <p className="text-gray text-center text-2xl md:hidden border-t-2 pt-5">
          Разработано в Германии. Сделано в России.
        </p>
        <div className="md:w-1/2">
          <h1 className="text-white text-5xl md:text-6xl font-orenburg leading-tight md:pt-24 pt-5 px-10 md:px-0">
            Сантехника и мебель для ванной комнаты
          </h1>
          <ul className="w-[375px] mt-10 text-white font-ptSans text-xl ">
            <div className="hover:text-orange">
              <li className=" flex items-center gap-1 py-5 ">
                <MdOutlineKeyboardArrowRight className="text-2xl text-orange" />
                <Link to="" className="">
                  О компании
                </Link>
              </li>
              <div className="h-[1px] bg-gradient-to-r from-[#4B4B4B] to-[#262625]"></div>
            </div>

            <div className="hover:text-orange">
              <li className=" flex items-center gap-1 py-5 ">
                <MdOutlineKeyboardArrowRight className="text-2xl text-orange" />
                <Link to="" className="">
                  О продукции
                </Link>
              </li>
              <div className="h-[1px] bg-gradient-to-r from-[#4B4B4B] to-[#262625]"></div>
            </div>

            <div className="hover:text-orange">
              <li className=" flex items-center gap-1 py-5 ">
                <MdOutlineKeyboardArrowRight className="text-2xl text-orange" />
                <Link to="" className="">
                  Каталог товаров
                </Link>
              </li>
            </div>
          </ul>

          <div className="h-1 w-1/4 flex justify-between items-center mt-24 mb-6 gap-1">
            <div className="h-[2px] w-1/4 bg-ashy-gray"></div>
            <div className="h-[2px] w-1/4 bg-ashy-gray">
              <div className="h-[2px] w-1/4 bg-orange"></div>
            </div>
            <div className="h-[2px] w-1/4 bg-ashy-gray"></div>
          </div>
        </div>

        <div className="w-1/2 relative pt-16 pl-44">
          <img src={WaterTap} alt="/" className="absolute" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
