import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../assets/data/data.json";

const CourseSlider = () => {
  const sliderRef = useRef(null);

  // Function to handle scrolling
  const handleScroll = (direction) => {
    if (sliderRef.current) {
      let scrollVal = sliderRef.current.scrollLeft;
      const scrollMax = sliderRef.current.scrollLeftMax;
      const scrollAmount = scrollMax / data.courses.length;
      if (direction == "next") {
        scrollVal + scrollAmount >= scrollMax
          ? (scrollVal = 0)
          : (scrollVal += scrollAmount);
      } else {
        scrollVal - scrollAmount <= 0
          ? (scrollVal = scrollMax)
          : (scrollVal -= scrollAmount);
      }
      sliderRef.current.scrollLeft = scrollVal;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("next");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex flex-row xl:flex-nowrap xxs:flex-wrap ">
        <div className="xl:w-[40%] xxs:w-[100%] flex flex-col justify-center  flex-none">
          <aside className="py-10 px-10 bg-primaryColor text-white">
            <h4 className="text-3xl">Our Featured Courses</h4>
            <p className="p-6">
              We offer a variety of professional courses at affordable fees,
              providing students with the skills needed for successful careers
              in the healthcare industry. Our courses include Lab Technician,
              Dispenser, Pharmacy Technician, Operation Theater (OT) Technician,
              and Radiographic Technician. With a focus on practical training
              and industry-relevant knowledge, we prepare students for roles in
              hospitals, pharmacies, diagnostic labs, and healthcare facilities.
            </p>
            <Link
              className="  bg-white text-textColor px-5 py-2 border rounded-lg text-lg hover:bg-primaryColor hover:text-white "
              to='/fee-structure'
            >
              Fee Structure
            </Link>
          </aside>
        </div>
        {/* Slider Container */}
        <div className="xl:w-[60%] xxs:w-[100%] bg-primaryColor flex flex-col gap-y-1 py-4 rounded-sm shadow-2xl">
          {/* Scrollable Content */}
          <div
            ref={sliderRef}
            className="p-8 flex flex-row gap-x-4 overflow-x-scroll scroll-smooth slider"
          >
            {data.courses.map(
              (
                { courseName, courseDescription, courseImg, courseImgAlt },
                index
              ) => (
                <div
                  key={index}
                  className="flex flex-col bg-white text-center w-[500px] flex-none rounded-sm pb-4 border border-primaryColor/50"
                >
                  <img
                    className="h-[250px] rounded-sm"
                    src={`/assets/images/${courseImg}`}
                    alt={courseImgAlt}
                  />
                  <h4 className="w-full bg-primaryColor text-white text-2xl py-4">
                    {courseName}
                  </h4>
                  <p className="py-5 px-4 text-textColor">{courseDescription}</p>
                  <div className="py-2">
                    <Link
                      to="/fee-structure"
                      className="text-white py-3 px-5 rounded-sm bg-primaryColor text-lg duration-100 cursor-pointer border border-primaryColor hover:bg-white hover:text-textColor"
                    >
                      Fee Structure & Eligibility
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
          {/* Navigation Buttons */}
          <div className="flex flex-row text-sm font-black font-bolder mx-auto mt-4">
            <button
              onClick={() => handleScroll("prev")}
              className="text-white p-2 rounded-l-full border cursor-pointer bg-primaryColor hover:bg-opacity-80 transition duration-300"
            >
              Prev
            </button>
            <button
              onClick={() => handleScroll("next")}
              className="text-textColor bg-white p-2 rounded-r-full border cursor-pointer hover:bg-gray-200 transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseSlider;
