import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white border-gray-200 relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 border-b border-gray-300">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse pl-4"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-extrabold whitespace-nowrap text-gray-900">
            MY WEB SITE
          </span>
        </a>

        {/* Menu items in center */}
        <div className="hidden md:flex flex-1 justify-start md:ml-[250px]">
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 font-bold"
              >
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 font-bold"
              >
                Mağaza
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 font-bold"
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center md:order-2 space-x-4 pr-4 md:pr-8">
          <button
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-800 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => alert("Language options")}
          >
            <svg
              className="w-5 h-5 rounded-full mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                        />
                        <use xlinkHref="#a" y="420" />
                        <use xlinkHref="#a" y="840" />
                        <use xlinkHref="#a" y="1260" />
                      </g>
                      <use xlinkHref="#a" y="1680" />
                    </g>
                    <use xlinkHref="#b" x="247" y="210" />
                  </g>
                  <use xlinkHref="#c" x="494" />
                </g>
                <use xlinkHref="#d" x="988" />
                <use xlinkHref="#c" x="1976" />
                <use xlinkHref="#e" x="2470" />
              </g>
            </svg>
            English (US)
          </button>
          <button
            className="block md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-200"
            onClick={toggleSidebar}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-16 left-0 w-64 h-full bg-gray-700 text-white shadow-lg p-4 z-50">
          <button
            className="text-right text-white mb-4"
            onClick={toggleSidebar}
          >
            Close
          </button>
          <ul className="space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Anasayfa</li>
            <li className="hover:text-gray-300 cursor-pointer">Mağaza</li>
            <li className="hover:text-gray-300 cursor-pointer">İletişim</li>
          </ul>
        </div>
      )}
      <div className="h-6 md:hidden"></div> {/* Küçük ekranlarda boşluk için */}
    </nav>
  );
};

export default Navbar;
