import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [courses, setCourses] = useState([
    {
      courseName: "Lab Technician",
      courseDescription: "",
      coursePosition: "0%",
      courseScale: "85",
      courseZ: "0",
    },
    {
      courseName: "Dispenser",
      courseDescription: "",
      coursePosition: "20%",
      courseScale: "100",
      courseZ: "0",
    },
    {
      courseName: "Pharmacy Technician (B Category)",
      courseDescription: "",
      coursePosition: "40%",
      courseScale: "110",
      courseZ: "10",
    },
    {
      courseName: "Operation Theater Technician",
      courseDescription: "",
      coursePosition: "60%",
      courseScale: "100",
      courseZ: "0",
    },
    {
      courseName: "Radiographic",
      courseDescription: "",
      coursePosition: "80%",
      courseScale: "85",
      courseZ: "0",
    },
  ]);
  const handleNext = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        const currentPosition = parseFloat(course.coursePosition);
        const newPosition = currentPosition < 80 ? currentPosition + 20 : 0;
        let newScale = "100";
        if (newPosition === 0 || newPosition === 80) {
          newScale = "85";
        } else if (newPosition === 40) {
          newScale = "110";
        }
        return {
          ...course,
          coursePosition: `${newPosition}%`,
          courseScale: newScale,
          courseZ: newPosition === 40 ? "10" : "0",
        };
      })
    );
  };
  const handlePrevious = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        const currentPosition = parseFloat(course.coursePosition);
        const newPosition = currentPosition > 0 ? currentPosition - 20 : 88;
        let newScale = "100";
        if (newPosition === 0 || newPosition === 80) {
          newScale = "85";
        } else if (newPosition === 40) {
          newScale = "110";
        }
        return {
          ...course,
          coursePosition: `${newPosition}%`,
          courseScale: newScale,
          courseZ: newPosition === 40 ? "10" : "0",
        };
      })
    );
  };
  return (
    <div>
      <Header></Header>
      <main className="w-full h-full overflow-hidden">
        <div className="w-full 2xl:h-[600px] xl:h-[500px] relative flex flex-row flex-wrap ">
          <div className="w-[95%] h-full relative">
            <div className="w-[100%] h-full bg-primaryColor clip-wave absolute top-0 left-0 p-8">
              <div>
                <img
                  className="2xl:w-[150px] 2xl:h-[150px] xl:w-[140px] xl:h-[140px]"
                  src="./AIMS-Kabirwala-logo.svg"
                  alt="AIMS-Kabirwala-logo"
                />
              </div>
              <div className=" flex flex-col 2xl:px-6 xl:px-4 py-10 gap-5">
                <h1 className="text-[#f3f3f3] 2xl:text-4xl xl:text-3xl font-bold">
                  Ayan Institute Of Medical Sciences Kabriwala
                </h1>
                <h2 className="text-secondaryColor 2xl:text-xl xl:text-lg">
                  Jameel Colony Neya adda , khanewal road Kabirwala, Kabirwala,
                  Pakistan
                </h2>
                <h2 className="text-[#f3f3f3] 2xl:text-3xl xl:text-2xl ">
                  College Of Pharmacy
                </h2>
              </div>
              <div className="w-[30%] flex flex-flex-row justify-start px-6 2xl:gap-20 xl:gap-16 2xl:pt-10 xl:pt-2">
                <a
                  href="#"
                  className="border border-white  2xl:px-8 2xl:py-4 xl:px-6 xl:py-2 text-nowrap  rounded-sm  text-[#f3f3f3] flex flex-row gap-2 items-center group duration-200 hover:bg-white hover:text-primaryColor 2xl:text-2xl xl:text-xl"
                >
                  <p>Call Us</p>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      width="30px"
                      height="30px"
                      className=" fill-white group-hover:fill-textColor"
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
                  href="#"
                  className="border border-white 2xl:px-8 2xl:py-6 xl:px-6 xl:py-3 text-nowrap rounded-sm text-[#f3f3f3] flex flex-row gap-2 items-center group duration-200 hover:bg-darkSC hover:border-primaryColor hover:text-primaryColor 2xl:text-2xl xl:text-xl "
                >
                  <p>Find Us</p>
                  <span>
                    <svg
                      className="fill-white group-hover:fill-textColor"
                      width="30px"
                      height="30px"
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
            <div className="w-[30%] h-full bg-gradient-to-r from-primaryColor/40 to-white/40 clip-wave absolute top-0 left-[50%]"></div>
          </div>
          <div className="w-[90%] h-full absolute left-[20%] overflow-hidden -z-50">
            <img
              className="w-[100%] h-[100%] relative"
              src="./AIMS-Kabirwala-Institute.webp"
              alt="Main Institute Pic"
            />
            <div className=" absolute bg-primaryColor/10 inset-0"></div>
          </div>
        </div>
        <div className="w-full 2xl:h-[140px] xl:h-[120px] bg-primaryColor flex justify-center gap-20 items-center">
          <div className="text-[#fff] text-center h-full w-[150px] flex flex-col items-center justify-center text-xl relative duration-200 group hover:bg-white hover:text-textColor cursor-pointer">
            <div className="flex flex-row gap-2">
              <svg
                className=" stroke-white fill-white group-hover:stroke-primaryColor group-hover:fill-primaryColor"
                width="24px"
                height="24px"
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
            <p>Courses</p>
            <p className="text-sm underline pt-2">Learn More</p>
          </div>
          <div className="text-primaryColor text-center h-full w-[150px] flex flex-col items-center justify-center text-xl relative bg-white duration-200 group hover:bg-primaryColor  hover:text-white cursor-pointer">
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
            <p>Registerd</p>
            <p className="text-sm underline pt-2">Learn More</p>
          </div>
          <div className="text-[#fff] text-center h-full w-[150px] flex flex-col items-center justify-center text-xl relative duration-200 group hover:bg-white hover:text-textColor cursor-pointer">
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
            <p>Seats</p>
            <p className="text-sm underline pt-2">Learn More</p>
          </div>
          <div className="text-primaryColor text-center h-full w-[150px] flex flex-col items-center justify-center text-xl relative bg-white duration-200 group hover:bg-primaryColor  hover:text-white cursor-pointer">
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
            <p>Labs</p>
            <p className="text-sm underline pt-2">Learn More</p>
          </div>
        </div>
      </main>
      <section className="container mx-auto flex flex-row  2xl:p-20 xl:p-16">
        <div className="w-[50%] h-full ">
          <p className="2xl:text-3xl xl:text-2xl text-textColor ">
            Welcome To A.I.M.S
          </p>
          <article className="py-4 px-6 2xl:text-md xl:text-sm text-primaryColor">
            <strong>Ayan Institute Of Medical Sciences (A . I . M . S)</strong>,
            Kabirwala is a reputable college that offers diplomas, certificates,
            and specialized courses in B-Category, Operation Theater (O.T.), and
            other medical fields for both girls and boys. The institute is
            officially registered with the Punjab Pharmacy Council, Lahore,
            ensuring that all programs meet the required professional and
            educational standards. With a focus on high-quality medical
            education, Ayan Institute aims to equip students with the skills and
            knowledge needed for a successful career in the healthcare sector.
          </article>
        </div>
        <div className="w-[50%] h-full 2xl:text-md xl:text-sm rounded-sm border border-primaryColor/30 text-primaryColor bg-[#EDEADE] text-center  py-4">
          <p className=" font-bold 2xl:text-3xl xl:text-2xl ">Visit A.I.M.S</p>
          <p className="pt-5 ">
            At,
            <strong>
              Jameel Colony Neya adda , khanewal road Kabirwala, Kabirwala,
              Pakistan
            </strong>
          </p>
          <span className="pt-10 ">
            Or Call at , <h2 className="font-bold">0300-9279148</h2>
          </span>
          <div className="mt-4">
            <button className="border border-primaryColor bg-primaryColor text-white px-6 py-2 text-xl rounded-sm duration-200 hover:bg-white hover:text-textColor cursor-pointer">
              Courses &gt;&gt;
            </button>
          </div>
        </div>
      </section>
      <section className="bg-primaryColor">
        <div className="container mx-auto flex flex-row items-center justify-evenly gap-20 py-20 my-2">
          <div className="px-10 py-8 rounded-sm border border-primaryColor/30 bg-[#EDEADE]">
            <p className="text-3xl font-bold text-primaryColor ">We Offer : </p>
            <p className="mx-10 my-4 text-textColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cumque, veniam ratione deserunt quod quidem odio
              beatae soluta eaque voluptatum! Consequatur harum magni nemo
              suscipit et, ut similique totam repellendus, quod perspiciatis
              nostrum iste ipsa natus libero aspernatur quam, laboriosam
              perferendis nam dicta blanditiis atque. Ex consequatur praesentium
              soluta inventore, voluptate minima accusamus tempore vero aperiam
              neque vel doloribus iste aspernatur obcaecati voluptates,
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 grid-rows-2 rounded-sm border border-[#edeade]/40 p-2">
            <img
              className="w-[1000px] rounded-sm border border-[#edeade]/60"
              src="./AIMS-Kabirwala-Institute.webp"
              alt="Main building"
            />
            <img
              className="w-[1000px] rounded-sm border border-[#edeade]/60"
              src="./AIMS-Kabirwala-Institute.webp"
              alt="Main building"
            />
            <img
              className="w-[1000px] rounded-sm border border-[#edeade]/60"
              src="./AIMS-Kabirwala-Institute.webp"
              alt="Main building"
            />
            <img
              className="w-[1000px] rounded-sm border border-[#edeade]/60"
              src="./AIMS-Kabirwala-Institute.webp"
              alt="Main building"
            />
          </div>
        </div>
      </section>
      <section className="my-12">
        <p className="text-center text-5xl font-bold text-textColor my-8">
          Courses
        </p>
        <div className="flex flex-row items-center justify-center text-white">
          <button
            onClick={handlePrevious}
            className="bg-primaryColor p-6 font-bold text-3xl  "
          >
            &lt;
          </button>
          <div className="w-[1800px] h-[600px] p-10 flex flex-row justify-center items-center bg-primaryColor rounded-sm text-black overflow-hidden relative">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`w-[300px] h-[500px] absolute bg-[#edeade]  transition-all duration-300 rounded-sm`}
                style={{
                  left: course.coursePosition,
                  transform: `scale(${parseInt(course.courseScale) / 100})`,
                  zIndex: course.coursez,
                }}
              >
                {course.courseName}
              </div>
            ))}
          </div>
          <button
            className="bg-primaryColor p-6 font-bold text-3xl"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-row items-center justify-center">
          <div className="p-10 bg-[#edeade]">
            <p className="text-textColor text-4xl">Registered By:</p>
            <div className="mx-16 my-10 flex items-center justify-center flex-col gap-y-6">
              <img
                className="w-[150px] h-[150px]"
                src="./Punjab-Pharmacy-Council-Logo.svg"
                alt="punjab-pharmacy-council-logo"
              />
              <h3 className="text-center text-3xl text-primaryColor">
                Punjab Pharmacy Council
              </h3>
            </div>
          </div>
          <div className=" bg-primaryColor rounded-sm py-10 px-24 flex flex-col gap-y-4 justify-center item-center text-center gap-10">
            <div className="flex flex-row items-center gap-x-4 justify-center text-textColor">
              <div className="text-center p-10 rounded-sm bg-[#edeade]">
                <p className="text-2xl">80</p>
                <p className="text-xl">Morning</p>
              </div>
              <p className="text-4xl font-bolder text-white">+</p>
              <div className="text-center p-10 rounded-sm bg-[#edeade]">
                <p className="text-2xl">80</p>
                <p className="text-xl">Evening</p>
              </div>
            </div>
            <div className="mx-auto flex flex-row p-10 bg-white rounded-sm text-textColor items-end gap-2">
              <svg
                className=" stroke-primaryColor fill-primaryColor mx-4"
                height="60px"
                width="60px"
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
              <p className="text-4xl font-bold">160</p>
              <p className="text-sm font-bolder">TOTAL</p>
            </div>
            <p className="text-3xl text-white">Seats</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
