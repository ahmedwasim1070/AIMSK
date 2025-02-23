import React, { useEffect, useState } from "react";

function Header({ smNav, setSmNav, smShNav, setSmShNav }) {
  return (
    <header className="bg-white sticky top-0 z-[9999]">
      <nav className="w-full 2xl:h-[120px] xl:h-[110px] lg:h-[110px]  flex flex-row items-center p-5">
        <div className="w-[50%] h-full flex flex-row items-center gap-4">
          <div className="flex-none">
            <img
              className="2xl:w-[100px] 2xl:h-[100px] xl:w-[90px] xl:h-[90px] lg:w-[90px] lg:h-[90px] md:w-[80px] md:h-[80px]"
              src="./AIMS-Kabirwala-logo.svg"
              alt="AIMS Logo"
            />
          </div>
          <div>
            <h1 className="text-textColor 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl text-nowrap">
              {smNav
                ? "Ayan Intitute Of Medical Sceinces Kabirwala"
                : "A . I . M . S"}
            </h1>
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-row items-center gap-x-5 justify-end">
          <a
            className="flex flex-row items-center bg-primaryColor 2xl:py-3 xl:py-2 2xl:px-6 xl:px-5 lg:px-5 lg:py-2 md:px-5 md:py-2.5 rounded-sm duration-200 gap-2 group text-white hover:bg-white hover:border hover:border-primaryColor hover:text-textColor"
            href=""
          >
            <p className="font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl ">
              Call Us
            </p>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className=" fill-white group-hover:fill-textColor 2xl:w-[30px] 2xl:h-[30px] xl:w-[30px] xl:h-[30px] lg:w-[30px] lg:h-[32px] md:w-[25px] md:h-[25px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"></path>
                </g>
              </svg>
            </span>
          </a>
          {!smNav && (
            <button
              onClick={() => setSmShNav(!smShNav)}
              className={`p-2  border border-primaryColor rounded-full duration-200 group hover:bg-primaryColor cursor-pointer ${smShNav?'bg-primaryColor':'bg-white'}`}
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-[30px] h-[30px]  stroke-primaryColor group-hover:stroke-white ${smShNav?'stroke-white':'stroke-primaryColor'}`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Menu / Menu_Alt_01">
                    <path
                      id="Vector"
                      d="M12 17H19M5 12H19M5 7H19"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          )}
        </div>
      </nav>
      {smNav && (
        <nav className="w-full h-[35px] flex flex-row items-center justify-center bg-primaryColor overflow-hidden">
          <div className="w-full h-fuil flex justify-center items-center">
            <ul className="2xl:w-[35%] xl:w-[45%] lg:w-[45%] md:w-[60%] h-full flex flex-row justify-evenly text-xl text-white">
              <li className=" cursor-pointer hover:bg-white hover:text-textColor p-4">
                <a href="#">Home</a>
              </li>
              <li className=" cursor-pointer hover:bg-white hover:text-textColor p-4">
                <a href="#">Courses</a>
              </li>
              <li className=" cursor-pointer hover:bg-white hover:text-textColor p-4">
                <a href="#">Fee Structure</a>
              </li>
              <li className=" cursor-pointer hover:bg-white hover:text-textColor p-4">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
