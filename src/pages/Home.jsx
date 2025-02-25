import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [smShNav, setSmShNav] = useState(false);
  const [smNav, setSmNav] = useState(false);
  const [courses, setCourses] = useState([
    {
      courseImg: "AIMs-Kabirwala-C01.webp",
      courseImgAlt: "Lab Technician",
      courseName: "Lab Technician",
      courseDescription:
        "A Lab Technician course focuses on medical laboratory procedures and diagnostic testing. Students learn about hematology, microbiology, biochemistry, and pathology, gaining the skills to analyze samples and assist doctors in diagnosing diseases. Lab technicians play a crucial role in healthcare and can work in hospitals, diagnostic labs, and research facilities.",
      coursePosition: "0%",
      courseScale: "85",
      courseZ: "0",
    },
    {
      courseImg: "AIMs-Kabirwala-C02.webp",
      courseImgAlt: "Dispenser",
      courseName: "Dispenser",
      courseDescription:
        "The Dispenser course trains students in handling, storing, and dispensing medicines under a pharmacist's supervision. It covers pharmaceutical calculations, drug interactions, and basic patient counseling. Dispensers are responsible for managing prescriptions and ensuring accurate medication distribution. Graduates of this course can work in pharmacies, hospitals, and healthcare centers.",
      coursePosition: "20%",
      courseScale: "100",
      courseZ: "0",
    },
    {
      courseImg: "AIMs-Kabirwala-C03.webp",
      courseImgAlt: "Pharmacy Technician , B-Category",
      courseName: "Pharmacy Technician",
      courseDescription:
        "A Pharmacy Technician course provides more in-depth training in pharmaceutical sciences, drug formulations, and medication safety. Pharmacy technicians assist pharmacists by preparing prescriptions, managing inventory, and ensuring patients receive the correct medications. They play a vital role in both hospital and retail pharmacy settings.",
      coursePosition: "40%",
      courseScale: "110",
      courseZ: "10",
    },
    {
      courseImg: "AIMs-Kabirwala-C04.webp",
      courseImgAlt: "Operation Therater Technician",
      courseName: "Operation Theater Technician",
      courseDescription:
        "The Operation Theater Technician course focuses on preparing and maintaining operation theaters, sterilizing surgical instruments, and assisting surgeons during medical procedures. Students learn about anesthesia basics, surgical protocols, and emergency handling. OT technicians work in hospitals and surgical centers, ensuring that operating rooms function smoothly.",
      coursePosition: "60%",
      courseScale: "100",
      courseZ: "0",
    },
    {
      courseImg: "AIMs-Kabirwala-C05.webp",
      courseImgAlt: "Radiographic",
      courseName: "Radiographic",
      courseDescription:
        "A Radiographic course trains students in using medical imaging technologies such as X-rays, MRI, and CT scans. It emphasizes radiation safety, image processing, and patient positioning, enabling graduates to assist radiologists in diagnosing diseases. Radiology technicians typically work in hospitals, diagnostic imaging centers, and specialized radiology departments.",
      coursePosition: "80%",
      courseScale: "85",
      courseZ: "0",
    },
  ]);
  const [institutePic, setInstitutePics] = useState([
    {
      img: "AIMS-Pic-01.webp",
    },
    {
      img: "AIMS-Pic-02.webp",
    },
    {
      img: "AIMS-Pic-03.webp",
    },
    {
      img: "AIMS-Pic-04.webp",
    },
  ]);
  const [picIdx, setPicIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPicIdx((prevIdx) =>
        prevIdx < institutePic.length - 1 ? prevIdx + 1 : 0
      );
    }, 3000);

    const checkScreenSize = () => {
      setSmNav(window.innerWidth >= 1022);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      <Header
        smNav={smNav}
        setSmNav={setSmNav}
        smShNav={smShNav}
        setSmShNav={setSmShNav}
      ></Header>
      <nav
        className={`bg-[#f3f3f3] md:w-[60%] sm:w-[70%] xs:w-[80%] xxs:w-[90%] h-[90vh] fixed duration-300 ${
          smShNav
            ? "right-0"
            : "md:right-[-60%] sm:right-[-70%] xs:right-[-80%] xxs:right-[-90%]"
        } z-50 border border-primaryColor/30 rounded-sm flex flex-col`}
      >
        <div className="py-6 flex flex-row gap-x-3 gap-y-6 justify-center items-center flex-wrap ">
          <img
            className="md:w-[70px] sm:w-[60px] xs:w-[60px] md:h-[70px] sm:h-[60px] xs:h-[60px] xxs:w-[50px] xxs:h-[50px]"
            src="./AIMS-Kabirwala-logo.svg"
            alt="AIMS-Kabirwala-logo"
          />
          <p className="md:text-xl sm:text-lg xs:text-lg xxs:text-sm font-bold text-textColor">
            Ayan Intitute Of Medical Sciences Kabirwala
          </p>
        </div>
        <ul className="text-textColor font-bold text-lg md:py-24 sm:py-26 xs:py-20 xxs:py-22">
          <hr className="w-full border-primaryColor" />
          <li className="py-4 flex flex-row items-center justify-between mx-10 cursor-pointer">
            <a href="#">Home</a>
            <svg
              className="w-[30px] h-[30px] fill-primaryColor"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"></path>
              </g>
            </svg>
          </li>
          <hr className="w-full border-primaryColor" />
          <li className="py-4 flex flex-row justify-between items-center mx-10 cursor-pointer">
            <a href="#">Courses</a>
            <svg
              className=" fill-primaryColor w-[30px] h-[30px]"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M1750.176 0v1468.235h-225.882v338.824h169.412V1920H451.353c-82.447 0-161.506-36.141-215.718-99.388-42.917-50.824-66.635-116.33-66.635-182.965V282.353C169 126.494 295.494 0 451.353 0h1298.823Zm-338.823 1468.235H463.776c-89.223 0-166.023 60.989-179.576 140.047-1.13 9.036-2.259 18.07-2.259 25.977v3.388c0 40.659 13.553 79.059 40.659 109.553 31.624 38.4 79.059 59.859 128.753 59.859h960v-112.941H408.435v-112.942h1002.918v-112.94Zm-56.47-564.706h-790.59v112.942h790.588V903.529Zm56.47-564.705h-903.53v451.764h903.53V338.824ZM620.765 677.647h677.647V451.765H620.765v225.882Z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </li>
          <hr className="w-full border-primaryColor" />
          <li className="py-4 flex flex-row justify-between items-center mx-10 cursor-pointer">
            <a href="#">Fee-Structure</a>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] fill-primaryColor"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20.167 18.702a4.369 4.369 0 001.586-5.783L18.53 6.857a4.369 4.369 0 00-5.909-1.806l-.124.066a4.369 4.369 0 00-1.806 5.908l.956 1.798c.072-.044.145-.086.22-.126l.124-.066a4.369 4.369 0 015.909 1.806zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.167-13.298a4.438 4.438 0 01-.22.126l-.124.065a4.369 4.369 0 01-5.909-1.806l-2.267-4.264a4.369 4.369 0 00-1.586 5.782l3.222 6.06a4.369 4.369 0 005.908 1.806l.124-.066a4.369 4.369 0 001.807-5.908z"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
          </li>
          <hr className="w-full border-primaryColor" />
          <li className="py-4 flex flex-row justify-between items-center mx-10 cursor-pointer">
            <a href="#">About-Us</a>
            <svg
              className="w-[30px] h-[30px] fill-primaryColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <style type="text/css"> </style>
                <g>
                  <path
                    class="st0"
                    d="M256,0C114.616,0,0,114.612,0,256s114.616,256,256,256s256-114.612,256-256S397.385,0,256,0z M207.678,378.794 c0-17.612,14.281-31.893,31.893-31.893c17.599,0,31.88,14.281,31.88,31.893c0,17.595-14.281,31.884-31.88,31.884 C221.959,410.678,207.678,396.389,207.678,378.794z M343.625,218.852c-3.596,9.793-8.802,18.289-14.695,25.356 c-11.847,14.148-25.888,22.718-37.442,29.041c-7.719,4.174-14.533,7.389-18.769,9.769c-2.905,1.604-4.479,2.95-5.256,3.826 c-0.768,0.926-1.029,1.306-1.496,2.826c-0.273,1.009-0.558,2.612-0.558,5.091c0,6.868,0,12.512,0,12.512 c0,6.472-5.248,11.728-11.723,11.728h-28.252c-6.475,0-11.732-5.256-11.732-11.728c0,0,0-5.645,0-12.512 c0-6.438,0.752-12.744,2.405-18.777c1.636-6.008,4.215-11.718,7.508-16.694c6.599-10.083,15.542-16.802,23.984-21.48 c7.401-4.074,14.723-7.455,21.516-11.281c6.789-3.793,12.843-7.91,17.302-12.372c2.988-2.975,5.31-6.05,7.087-9.52 c2.335-4.628,3.955-10.067,3.992-18.389c0.012-2.463-0.698-5.702-2.632-9.405c-1.926-3.686-5.066-7.694-9.264-11.29 c-8.45-7.248-20.843-12.545-35.054-12.521c-16.285,0.058-27.186,3.876-35.587,8.62c-8.36,4.776-11.029,9.595-11.029,9.595 c-4.268,3.718-10.603,3.85-15.025,0.314l-21.71-17.397c-2.719-2.173-4.322-5.438-4.396-8.926c-0.063-3.479,1.425-6.81,4.061-9.099 c0,0,6.765-10.43,22.451-19.38c15.62-8.992,36.322-15.488,61.236-15.429c20.215,0,38.839,5.562,54.268,14.661 c15.434,9.148,27.897,21.744,35.851,36.876c5.281,10.074,8.525,21.43,8.533,33.38C349.211,198.042,347.248,209.058,343.625,218.852 z"
                  ></path>
                </g>
              </g>
            </svg>
          </li>
          <hr className="w-full border-primaryColor" />
        </ul>
        <ul className="w-full flex flex-row flex-nowrap justify-center gap-x-6 pt-14">
          <li className="bg-primaryColor rounded-full p-2 flex items-center border border-primaryColor justify-center cursor-pointer duration-300 group hover:bg-[#316FF6] hover:border-[#316FF6]">
            <svg
              className="w-[30px] h-[30px] fill-white group-hover:fill-black"
              viewBox="0 0 32 32"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
              </g>
            </svg>
          </li>
          <li className="bg-primaryColor border border-primaryColor rounded-full p-2 flex items-center justify-center cursor-pointer duration-300 group hover:bg-[#25D366] hover:border-[#25D366]">
            <svg
              className="w-[30px] h-[20px] fill-white group-hover:fill-black "
              viewBox="0 0 20 20"
              version="1.1"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-300.000000, -7599.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                        id="whatsapp-[#128]"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </li>
          <li className="border border-primaryColor bg-primaryColor rounded-full p-2 flex items-center justify-center cursor-pointer duration-300 group hover:bg-[#BB001B] hover:border-[#BB001B]">
            <svg
              className="w-[30px] h-[20px] fill-white group-hover:fill-black"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
              </g>
            </svg>
          </li>
          <li className="bg-primaryColor border border-primaryColor rounded-full p-2 flex items-center justify-center cursor-pointer duration-300 group hover:bg-darkerSC hover:border-darkerSC">
            <svg
              className="w-[30px] h-[20px] fill-white group-hover:fill-black"
              viewBox="0 0 24 24"
              fill="none"
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
          </li>
        </ul>
        <ul className="w-full flex flex-row items-center justify-evenly gap-x-4 text-primaryColor underline md:pt-8 sm:pt-4 xs:pt-6 xxs:pt-8">
          <li>
            <a href="#">Admin-Portal</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">About-dev</a>
          </li>
        </ul>
      </nav>
      <div
        className={`relative duration-300 ${
          smShNav
            ? "md:left-[-60%] sm:left-[-70%] xs:left-[-80%] xxs:left-[-90%]"
            : "left-0"
        }`}
      >
        {smShNav && (
          <div
            onClick={() => setSmShNav(false)}
            className="absolute w-full h-full inset-0 bg-black/20 backdrop-blur z-50"
          ></div>
        )}
        <main className="w-full h-full overflow-hidden">
          <div className="w-full 2xl:h-[600px] xl:h-[500px] lg:h-[500px] md:h-[850px] sm:h-[800px] xs:h-[800px] xxs:h-[600px] relative flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col flex-wrap">
            <div className="2xl:w-[95%] xl:w-[95%] lg:w-[115%] md:w-[100%] sm:w-[100%] xs:w-[100%] xxs:w-[100%] h-full relative">
              <div className="w-[100%] h-full bg-primaryColor clip-wave absolute 2xl:top-0 xl:top-0 lg:top-0 md:top-[200px] sm:top-[250px] xs:top-[200px] xxs:top-[100px] left-0 2xl:p-8 xl:p-8 lg:p-8 md:p-8 sm:p-6 xs:p-6 xxs:p-4 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-40 sm:pt-30 xs:pt-24 xxs:pt-20">
                <div>
                  <img
                    className="2xl:w-[150px] 2xl:h-[150px] xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] sm:w-[120px] sm:h-[120px] xs:w-[120px] xs:h-[120px] xxs:w-[80px] xxs:h-[80px]"
                    src="./AIMS-Kabirwala-logo.svg"
                    alt="AIMS-Kabirwala-logo"
                  />
                </div>
                <div className=" flex flex-col 2xl:px-6 xl:px-4 lg:px-4 md:px-2 sm:px-3 xs:px-0 py-10 gap-5">
                  <h1 className="text-[#f3f3f3] 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl xxs:text-xl font-bold">
                    Ayan Institute Of Medical Sciences Kabriwala
                  </h1>
                  <h2 className="text-secondaryColor 2xl:text-xl xl:text-lg lg:text-lg lg:text-md md:text-lg sm:text-lg xs:text-md xxs:text-sm">
                    Jameel Colony Neya adda , khanewal road Kabirwala,
                    Kabirwala, Pakistan
                  </h2>
                  <h2 className="text-[#f3f3f3] 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl xxs:text-lg">
                    College Of Pharmacy
                  </h2>
                </div>
                <div className="w-[30%] flex flex-flex-row justify-start 2xl:px-6 xl:px-6 lg:px-5 md:px-2 sm:px-4 xs:px-2 xxs:px-2 2xl:gap-20 xl:gap-16 lg:gap-14 md:gap-16 sm:gap-12 xs:gap-10 xxs:gap-5 2xl:pt-10 xl:pt-2 lg:pt-2 md:pt-4 sm:pt-2 xs:pt-2 xxs:pt-2">
                  <a
                    href="tel:+923009279148"
                    className="border border-white  2xl:px-8 2xl:py-4 xl:px-6 xl:py-2 lg:px-5 lg:py-3 md:px-7 md:py-3 sm:px-5 sm:py-3 xs:px-4 xs:py-3 xxs:px-2 xxs:py-3 text-nowrap  rounded-sm  text-[#f3f3f3] flex flex-row gap-2 items-center group duration-200 hover:bg-white hover:text-primaryColor 2xl:text-2xl xl:text-xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl xxs:text-lg"
                  >
                    <p>Call Us</p>
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className=" fill-white group-hover:fill-textColor 2xl:w-[30px] 2xl:h-[30px] xl:w-[30px] xl:h-[30px] lg:w-[28px] lg:h-[28px] md:w-[35px] md:h-[35px] sm:w-[28px] sm:h-[28px] xs:w-[28px] xs:h-[28px] xxs:w-[25px] xxs:h-[25px]"
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
                  <a
                    href="https://www.google.com/maps/place/Ayan+Institute+Of+Medical+Sciences+Kabirwala/@30.7293711,71.8622179,10z/data=!4m10!1m3!11m2!2sKh20YjD5je1xGqDb-Qexbx_0OsMKyg!3e1!3m5!1s0x3924abbc50843223:0x442e3e18c34f5407!8m2!3d30.3987292!4d71.865604!16s%2Fg%2F11rcmnxkjf?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                    className="border border-white 2xl:px-8 2xl:py-4 xl:px-6 xl:py-3 lg:px-5 lg:py-2 md:px-7 md:py-3 sm:px-5 sm:py-3 xs:px-4 xs:py-3 xxs:px-2 xxs:py-3 text-nowrap rounded-sm text-[#f3f3f3] flex flex-row gap-2 items-center group duration-200 hover:bg-darkSC hover:border-primaryColor hover:text-primaryColor 2xl:text-2xl xl:text-xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl xxs:text-lg"
                  >
                    <p>Find Us</p>
                    <span>
                      <svg
                        className="fill-white group-hover:fill-textColor 2xl:w-[30px] 2xl:h-[30px] xl:w-[30px] xl:h-[30px] lg:w-[28px] lg:h-[28px] md:w-[35px] md:h-[35px] sm:w-[28px] sm:h-[28px] xs:w-[28px] xs:h-[28px] xxs:w-[25px] xxs:h-[25px]"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 413.099 413.099"
                        xmlSpace="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path d="M206.549,0L206.549,0c-82.6,0-149.3,66.7-149.3,149.3c0,28.8,9.2,56.3,22,78.899l97.3,168.399c6.1,11,18.4,16.5,30,16.5 c11.601,0,23.3-5.5,30-16.5l97.3-168.299c12.9-22.601,22-49.601,22-78.901C355.849,66.8,289.149,0,206.549,0z M206.549,193.4 c-30,0-54.5-24.5-54.5-54.5s24.5-54.5,54.5-54.5s54.5,24.5,54.5,54.5C261.049,169,236.549,193.4,206.549,193.4z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-full sm:w-full xs:w-full xxs:w-full 2xl:h-full xl:h-full lg:h-full md:h-[150px] sm:h-[200px] xs:h-[200px] xxs:h-[200px] bg-gradient-to-r from-primaryColor/40 to-white/40 clip-wave absolute 2xl:top-0 xl:top-0 lg:top-0 md:top-[150px] sm:top-[200px] xs:top-[150px] xxs:top-[80px] 2xl:left-[50%] xl:left-[50%] lg:left-[50%] md:left-0 2xl:z-0 xl:z-0 lg:z-0 md:-z-10 sm:-z-10 xs:-z-10 xxs:-z-10"></div>
            </div>
            <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-full 2xl:h-full xl:h-full lg:h-full md:h-[350px]  absolute 2xl:left-[20%] xl:left-[20%] lg:left-[20%] md:left-0 overflow-hidden -z-50">
              <img
                className="w-[100%] h-[100%] relative"
                src="./AIMS-Kabirwala-Institute.webp"
                alt="Main Institute Pic"
              />
              <div className="absolute bg-primaryColor/10 inset-0"></div>
            </div>
          </div>
          <div className="w-full 2xl:h-[140px] xl:h-[120px] lg:h-[130px] md:h-full sm:h-full xs:h-full xxs:h-full bg-primaryColor flex flex-row  2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-10 sm:gap-0 xs:gap-0 xxs:gap-0 items-center justify-center 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-6 xs:pt-5 xxs:pt-2 flex-wrap">
            <div className="2xl:w-[150px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] xs:w-[150px] xxs:w-[150px] 2xl:h-full xl:h-full lg:h-full md:h-[150px] sm:h-[150px] xs:h-[150px] xxs:h-[150px]  text-[#fff] text-center flex flex-col items-center justify-center text-xl relative duration-200 group hover:bg-white hover:text-textColor cursor-pointer flex-none">
              <div className="flex flex-row gap-2">
                <svg
                  className=" stroke-white fill-white group-hover:stroke-primaryColor group-hover:fill-primaryColor w-[24px] h-[24px]"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M1750.176 0v1468.235h-225.882v338.824h169.412V1920H451.353c-82.447 0-161.506-36.141-215.718-99.388-42.917-50.824-66.635-116.33-66.635-182.965V282.353C169 126.494 295.494 0 451.353 0h1298.823Zm-338.823 1468.235H463.776c-89.223 0-166.023 60.989-179.576 140.047-1.13 9.036-2.259 18.07-2.259 25.977v3.388c0 40.659 13.553 79.059 40.659 109.553 31.624 38.4 79.059 59.859 128.753 59.859h960v-112.941H408.435v-112.942h1002.918v-112.94Zm-56.47-564.706h-790.59v112.942h790.588V903.529Zm56.47-564.705h-903.53v451.764h903.53V338.824ZM620.765 677.647h677.647V451.765H620.765v225.882Z"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </svg>
                <p>8+</p>
              </div>
              <p className="2xl:text-md xl:text-md lg:text-md">Courses</p>
              <p className="text-sm underline pt-2">Learn More</p>
            </div>
            <div className="2xl:w-[150px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] xs:w-[150px] xxs:w-[150px] 2xl:h-full xl:h-full lg:h-full md:h-[150px] sm:h-[150px] xs:h-[150px] xxs:h-[150px] text-primaryColor text-center flex flex-col items-center justify-center text-xl relative bg-white duration-200 group hover:bg-primaryColor  hover:text-white cursor-pointer flex-none">
              <div className="flex flex-row gap-2">
                <svg
                  className=" fill-primaryColor group-hover:fill-white"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipule="evenodd"
                      d="M21.007 8.27C22.194 9.125 23 10.45 23 12c0 1.55-.806 2.876-1.993 3.73.24 1.442-.134 2.958-1.227 4.05-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996-1.438.235-2.954-.128-4.05-1.224-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05 1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993 1.442-.24 2.956.135 4.048 1.227 1.093 1.092 1.468 2.608 1.227 4.05Zm-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165 4.314-6.04a1 1 0 0 1 1.395-.232Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <p className="2xl:text-md xl:text-md lg:text-md">Registerd</p>
              <p className="text-sm underline pt-2">Learn More</p>
            </div>
            <div className="2xl:w-[150px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] xs:w-[150px] xxs:w-[150px] 2xl:h-full xl:h-full lg:h-full md:h-[150px] sm:h-[150px] xs:h-[150px] xxs:h-[150px] text-[#fff] text-center flex flex-col items-center justify-center text-xl relative duration-200 group hover:bg-white hover:text-textColor cursor-pointer flex-none">
              <div className="flex flex-row gap-2">
                <svg
                  className=" stroke-white fill-white group-hover:stroke-primaryColor group-hover:fill-primaryColor"
                  height="30px"
                  width="30px"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css"></style>
                    <g>
                      <path
                        className="st0"
                        d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093 L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101 c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618 l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148 l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                      />
                      <path
                        className="st0"
                        d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638 c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017 C278.145,344.44,267.25,346.831,256,346.831z"
                      />
                    </g>
                  </g>
                </svg>
                <p>160+</p>
              </div>
              <p className="2xl:text-md xl:text-md lg:text-md">Seats</p>
              <p className="text-sm underline pt-2">Learn More</p>
            </div>
            <div className="2xl:w-[150px] xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] xs:w-[150px] xxs:w-[150px] 2xl:h-full xl:h-full lg:h-full md:h-[150px] sm:h-[150px] xs:h-[150px] xxs:h-[150px] text-primaryColor text-center flex flex-col items-center justify-center text-xl relative bg-white duration-200 group hover:bg-primaryColor  hover:text-white cursor-pointer flex-none">
              <div className="flex flex-row gap-2">
                <svg
                  className=" fill-primaryColor group-hover:fill-white"
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>lab</title>
                    <path d="M19.332 19.041c0 0-1.664 2.125-3.79 0-2.062-2-3.562 0-3.562 0l-4.967 9.79c-0.144 0.533 0.173 1.081 0.706 1.224h16.497c0.533-0.143 0.85-0.69 0.707-1.224l-5.591-9.79zM26.939 28.33l-7.979-13.428v-0.025l-0.014-7.869h0.551c0.826 0 1.498-0.671 1.498-1.499 0-0.827-0.672-1.498-1.498-1.498h-7.995c-0.827 0-1.498 0.671-1.498 1.498 0 0.828 0.671 1.499 1.498 1.499h0.482l-0.016 7.871-6.908 13.451c-0.428 1.599 0.521 3.242 2.119 3.67h17.641c1.6-0.428 2.549-2.071 2.119-3.67zM24.553 30.998l-17.108-0.019c-1.065-0.286-1.697-1.382-1.412-2.446l6.947-13.616 0.021-8.908h-1.498c-0.275 0-0.499-0.224-0.499-0.5s0.224-0.499 0.499-0.499h7.995c0.275 0 0.498 0.224 0.498 0.499 0 0.276-0.223 0.5-0.498 0.5h-1.498l0.025 8.875 7.939 13.666c0.286 1.067-0.347 2.163-1.411 2.448zM16.48 2.512c0 0.552 0.448 1 1 1s1-0.448 1-1-0.447-1-1-1-1 0.447-1 1zM17.48 0.012c0.828 0 1.5-0.671 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.671-1.5 1.5 0.672 1.5 1.5 1.5zM13.48 2.512c0.553 0 1-0.448 1-1s-0.447-1-1-1-1 0.448-1 1 0.447 1 1 1z"></path>{" "}
                  </g>
                </svg>
              </div>
              <p className="2xl:text-md xl:text-md lg:text-md">Labs</p>
              <p className="text-sm underline pt-2">Learn More</p>
            </div>
          </div>
        </main>
        <section className="container mx-auto flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col justify-center 2xl:items-center xl:items-center lg:items-center md:items-start flex-wrap 2xl:px-20 2xl:py-20 xl:px-16 xl:py-16 lg:px-14 lg:py-14 md:px-10 md:py-20 sm:px-5 xs:px-2 xxs:px-1 sm:py-20 xs:py-10 xxs:py-20 2xl:gap-y-20 xl:gap-y-20 lg:gap-y-20 md:gap-y-10 sm:gap-y-10 xs:gap-y-8 xxs:gap-y-6">
          <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full h-full ">
            <p className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl xs:text-2xl xxs:text-2xl text-textColor ">
              Welcome To A.I.M.S
            </p>
            <article className="py-4 px-6 2xl:text-md xl:text-sm lg:text-[12px] text-primaryColor">
              <strong>
                Ayan Institute Of Medical Sciences (A . I . M . S)
              </strong>
              , Kabirwala is a reputable college that offers diplomas,
              certificates, and specialized courses in B-Category, Operation
              Theater (O.T.), and other medical fields for both girls and boys.
              The institute is officially registered with the Punjab Pharmacy
              Council, Lahore, ensuring that all programs meet the required
              professional and educational standards. With a focus on
              high-quality medical education, Ayan Institute aims to equip
              students with the skills and knowledge needed for a successful
              career in the healthcare sector.
            </article>
          </div>
          <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full bg-[#edeade]  rounded-sm border border-primaryColor/40 flex flex-col items-center justify-center gap-y-2 text-textColor py-5">
            <p>Registered By</p>
            <img
              className="w-24 h-24"
              src="Punjab-Pharmacy-Council-Logo.svg"
              alt="Punjab Pharmacy Council"
            />
            <p>Punjab Pharmacy Council</p>
          </div>
          <div className="w-full flex justify-center">
            <div className="text-center border border-primaryColor px-6 py-2 bg-primaryColor rounded-sm text-white text-lg font-bold duration-100 hover:bg-white hover:text-textColor ">
              <a href="#">Fee Structure & Eligibilty Criteria</a>
            </div>
          </div>
        </section>
        <section className="bg-primaryColor">
          <div className="container mx-auto p-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col justify-center items-center gap-10 ">
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full bg-white p-8 rounded-sm text-textColor">
              <p className="text-3xl">We Offer : </p>
              <p className="m-4">
                Ayan Institue Institute of Medical Sciences (AIMS) is a leading
                healthcare education center specializing in paramedical
                training. The institute offers five comprehensive programs: Lab
                Technician, Dispenser, Pharmacy Technician, Operation Theater
                Technician, and Radiographic studies. AIMS features five
                state-of-the-art laboratories equipped with modern medical
                technology that provides students with hands-on training
                experience. Each lab simulates real healthcare environments,
                allowing students to develop practical skills alongside
                theoretical knowledge. The institute's experienced faculty
                ensures graduates are well-prepared for careers in hospitals,
                clinics, and diagnostic centers. AIMS prides itself on its high
                employment rate and continues to contribute significantly to
                healthcare workforce development in the region.
              </p>
            </div>
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full flex flex-col gap-4">
              <div>
                <img
                  className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[350px] rounded-sm shadow-2xl border border-white/30"
                  src={`${institutePic[picIdx].img}`}
                  alt="Ayan Institute of Medical Sciences Kabriwala Pics"
                />
              </div>
              <div className="mx-auto">
                <button
                  onClick={() =>
                    setPicIdx(picIdx > 0 ? picIdx - 1 : institutePic.length - 1)
                  }
                  className="rounded-l-full px-3 py-2 border border-primaryColor text-sm bg-white text-textColor font-bold cursor-pointer duration-100 hover:bg-primaryColor hover:text-white hover:border-white/50 shadow-white/10 shadow-lg"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    setPicIdx(picIdx < institutePic.length - 1 ? picIdx + 1 : 0)
                  }
                  className="rounded-r-full px-3 py-2 border border-white/50 text-sm font-bold text-white cursor-pointer duration-100 hover:bg-white hover:text-textColor hover:border-primaryColor shadow-white/10 shadow-lg"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="my-12">
          <p className="text-center 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl xs:text-3xl xxs:text-3xl font-bold text-textColor my-8">
            Our Featured Courses
          </p>
          <div className="container mx-auto flex justify-center  gap-x-10 gap-y-10 flex-wrap flex-none p-3 place-items-center">
            {courses.map((course, index) => (
              <div
                key={index}
                className="relative shadow-2xl 2xl:w-[420px] xl:w-[380px] lg:w-[380px] md:w-[400px]  xs:w-[420px] xxs::w-[320px] cursor-pointer duration-700 hover:scale-105"
              >
                <div>
                  <img
                    className="rounded-sm"
                    src={`${course.courseImg}`}
                    alt={`${course.courseImgAlt}`}
                  />
                  <p className="bg-primaryColor px-10 py-2 absolute rounded-sm text-white font-bold top-0 ">
                    2-Years
                  </p>
                  <div className=" absolute inset-0 bg-[#edeade]/5"></div>
                </div>
                <div className="text-center py-2 text-white text-2xl bg-primaryColor">
                  {course.courseName}
                </div>
                <div className="px-2 py-4">
                  <p className="mx-1 my-4 text-textColor text-center">
                    {course.courseDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
