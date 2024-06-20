import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "./Register";

const navSubItems = [
  { title: "Смесители", path: "/" },
  { title: "Мебель", path: "/" },
  { title: "Душевая программа", path: "/" },
  { title: "Аксессуары", path: "/" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(!showRegister);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubeMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const navItems = [
    { title: "О компании", path: "/" },
    { title: "О продукции", path: "/" },
    { title: "Каталог товаров", path: "/" },
  ];

  return (
    <header className="max-w-screen-2xl bg-dark-green mx-auto">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center md:py-4 py-3 px-4">
        {/* logo and txt*/}
        <div className="flex items-center gap-4">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <p className="text-gray lg:text-lg font-ptSans hidden md:block">
            Разработано в Германии. Сделано в России.
          </p>
        </div>

        {/* phone and search */}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray text-lg font-ptSans hidden md:flex mr-2">
              <MdPhoneIphone className="text-2xl" />
              <p>+7 (905) 543 23 45</p>
            </div>
            {/* shopping cart */}
            <div className="flex gap-2 border rounded border-gray p-2">
              <RiShoppingCartLine className="text-orange md:text-[#EC7133] h-6 w-6 hover:text-white" />
              <p className="text-white font-lg">4 290 ₽</p>
            </div>
            {/* user */}
            <div
              onClick={handleRegisterClick}
              className="border rounded border-gray p-2"
            >
              <BiUser className="text-orange md:text-[#EC7133] h-6 w-6 hover:text-white" />
            </div>
            <Register isOpen={showRegister} onClose={handleRegisterClick} />

            {/* search */}
            <div className="border p-3 rounded text-gray">
              <FaSearch className="text-gray md:text-[#EC7133] h-5 w-5 hover:text-white" />
            </div>
          </div>
          {/* mobile menu */}
          <div className="flex gap-3 p-2 border rounded text-gray md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-7 h-7 text-white" />
              ) : (
                <FaBars className="w-7 h-7 text-gray" />
              )}
            </button>
            <p className="text-white text-lg font-ptSans font-bold">Меню</p>
          </div>
        </div>
      </nav>
      {/* only mibile menu */}
      <div
        style={{ height: `calc(100vh - 70px)` }}
        className={`md:hidden flex flex-col justify-between text-light-gray font-orenburg p-4 text-3xl ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          <li key={navItems[0].title} className="mb-6">
            <Link to="/">{navItems[0].title}</Link>
          </li>
          <li key={navItems[1].title} className="mb-6">
            <Link to="/">{navItems[1].title}</Link>
          </li>
          <li
            key={navItems[2].title}
            className={`mb-6  ${isSubMenuOpen ? "text-white" : ""}`}
          >
            <Link to="/" className="flex gap-2 items-center">
              <div>{navItems[2].title}</div>

              <button onClick={toggleSubeMenu} className="hover:text-white">
                {isSubMenuOpen ? (
                  <IoIosArrowDown className="w-6 h-6 transform rotate-180 mt-2" />
                ) : (
                  <IoIosArrowDown className="w-6 h-6 mt-3" />
                )}
              </button>
            </Link>
            <ul
              className={`pt-2 text-light-gray ${
                isSubMenuOpen ? "" : "hidden"
              }`}
            >
              {navSubItems.map(({ title }) => (
                <li key={title} className="mt-3 text-lg">
                  <Link to="/">{title}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="flex mt-auto justify-between items-center">
          <p className="text-xl">+7 (905) 543 23 45</p>
          <div className=" border rounded border-gray p-2">
            <BiUser className="text-orange md:text-[#EC7133] h-6 w-6 hover:text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
