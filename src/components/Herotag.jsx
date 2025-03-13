import { useEffect, useState } from "react";
import { PhoneIcon,MapPinIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSm(window.innerWidth <= 638);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <div className="relative">
          <img
            className="w-full h-[800px] "
            src="AIMS-Kabirwala-Institute.webp"
            alt="Ayan Institute of Medical Sciences Kabirwala Pic"
          />
          <div className=" absolute w-full h-full bg-[#841518]/[15%] inset-0 overflow-hidden">
            <div className="w-full h-[70%] flex flex-col gap-y-2 justify-end items-center py-6">
              <div className="lg:px-20 md:px-16 sm:px-16 xs:px-10 xxs:px-5 py-5 bg-lightPrimary text-white text-center rounded-sm shadow-2xl sm:mb-0 xs:mb-5">
                <h2 className="lg:text-5xl  xxs:text-3xl">
                  College Of Pharmacy
                </h2>
              </div>
              <div className="md:px-30 sm:px-20 sm:flex xxs:hidden mx-2 py-4 bg-primaryColor text-white flex flex-col gap-y-1 rounded-sm shadow-2xl">
                <div className="flex flex-row gap-x-5 justify-center">
                  <p className=" text-center md:text-nowrap xxs:text-wrap">
                    Near New Buss Sand , Main Street, Jameel Colony , Kabirwala
                  </p>
                </div>
                <div className="flex flex-row gap-x-5 justify-center">
                  <p className=" text-center">
                    0300-9279148 / 0300-7050624 / 0333-3202043
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[30%] bg-linear-to-b from-[#3D1313]/30 to-[#5F1E1E]/100 py-8 flex flex-col gap-y-6 ">
              <div className="md:w-[40%] xs:w-[80%] xxs:w-[95%] mx-auto flex flex-row justify-between items-center">
                <div>
                  <button className="px-5 py-3 border border-white rounded-sm flex flex-row gap-x-3 items-center text-white cursor-pointer duration-100 group hover:bg-primaryColor ">
                    <PhoneIcon className="size-6"/>
                    <p className="text-xl">Call Us</p>
                  </button>
                </div>
                <div>
                  <button className="px-5 py-3 border border-white rounded-sm flex flex-row gap-x-3 items-center text-white cursor-pointer duration-100 group hover:bg-primaryColor">
                    <MapPinIcon className="size-6"/>
                    <p className="text-xl">Find Us</p>
                  </button>
                </div>
              </div>
              <div className="sm:w-[70%] xxs:w-[80%] mx-auto text-center text-white">
                {isSm ? (
                  <div className="flex flex-col gap-y-3 pt-2">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                      <p className="text-center">
                        Near New Buss Sand , Main Street, Jameel Colony ,
                        Kabirwala
                      </p>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-3">
                      <p className=" text-center">
                        0300-9279148 / 0300-7050624 / 0333-3202043
                      </p>
                    </div>
                  </div>
                ) : (
                  <p>
                    is a reputable college that offers certificates, and
                    specialized courses in B-Category, Theater (O.T.), and other
                    medical fields for both girls and The institute is
                    officially registered with the Punjab Council, Lahore,
                    ensuring that all programs meet the professional and
                    educational standards. With a focus high-quality medical
                    education, Ayan Institute aims to students with the skills
                    and knowledge needed for a successful career in the
                    healthcare sector.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
