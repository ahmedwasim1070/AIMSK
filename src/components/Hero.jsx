import { useEffect, useState } from "react";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

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
      <section>
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
                <div className="flex flex-row gap-x-5 items-center justify-center">
                  <MapPinIcon className="size-6" />
                  <h3 className=" text-center md:text-nowrap xxs:text-wrap">
                    Near New Buss Sand , Main Street, Jameel Colony , Kabirwala
                  </h3>
                </div>
                <div className="flex flex-row gap-x-5 justify-center items-center">
                  <PhoneIcon className="size-5" />
                  <h3 className=" text-center">
                    0300-9279148 / 0300-7050624 / 0333-3202043
                  </h3>
                </div>
              </div>
            </div>
            <div className="h-[30%] bg-linear-to-b from-[#3D1313]/30 to-[#5F1E1E]/100 py-8 flex flex-col gap-y-6 ">
              <div className="md:w-[40%] xs:w-[80%] xxs:w-[95%] mx-auto flex flex-row justify-between items-center">
                <div>
                  <a
                    href="tel:+923009279148"
                    className="px-5 py-3 border border-white rounded-sm flex flex-row gap-x-3 items-center text-white cursor-pointer duration-100 group hover:bg-primaryColor "
                  >
                    <PhoneIcon className="size-6" />
                    <p className="text-xl">Call Us</p>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.google.com/maps/place/Ayan+Institute+Of+Medical+Sciences+Kabirwala/@30.3987338,71.8630291,17z/data=!3m1!4b1!4m9!1m2!10m1!1e1!3m5!1s0x3924abbc50843223:0x442e3e18c34f5407!8m2!3d30.3987292!4d71.865604!16s%2Fg%2F11rcmnxkjf?entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                    className="px-5 py-3 border border-white rounded-sm flex flex-row gap-x-3 items-center text-white cursor-pointer duration-100 group hover:bg-primaryColor"
                  >
                    <MapPinIcon className="size-6" />
                    <p className="text-xl">Find Us</p>
                  </a>
                </div>
              </div>
              <div className="sm:w-[70%] xxs:w-[80%] mx-auto text-center text-white">
                {isSm ? (
                  <div className="flex flex-col gap-y-3 pt-2">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                      <MapPinIcon className="size-4" />
                      <h3 className="text-center">
                        Near New Buss Sand , Main Street, Jameel Colony ,
                        Kabirwala
                      </h3>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-3">
                      <PhoneIcon className="size-4" />
                      <h3 className=" text-center">
                        0300-9279148 / 0300-7050624 / 0333-3202043
                      </h3>
                    </div>
                  </div>
                ) : (
                  <aside>
                    <h3 className="font-bold">
                      Ayan Institute of Medical Sciences Kabirwala ,
                    </h3>
                    <p>
                      is a registered pharmacy college offering diverse pharmacy
                      courses. Recognized by the{" "}
                      <strong>Punjab Pharmacy Council</strong> and{" "}
                      <strong>Punjab Medical Faculty</strong> since 2021, we
                      provide quality education for a successful career in
                      healthcare.
                    </p>
                  </aside>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
