import React from "react";

function Footer() {
  return (
    <footer className="bg-primaryColor">
      <section className="py-10 flex flex-row items-center justify-around container mx-auto 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap xxs:flex-wrap 2xl:gap-y-0 xl:gap-y-0 lg:gap-y-0 md:gap-y-6 sm:gap-y-6 xs:gap-y-8 xxs:gap-y-20">
        <div className="underline text-[#f3f3f3]">
          <nav>
            <ul className="flex flex-col gap-y-4 2xl:text-md xl:text-md lg:text-sm">
              <li>
                <a className="hover:text-secondaryColor" href="#">
                  Feedback
                </a>
              </li>
              <li>
                <a className="hover:text-secondaryColor" href="#">
                  Admin-Portal
                </a>
              </li>
              <li>
                <a className="hover:text-secondaryColor" href="#">
                  Report-Issue
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-[#f3f3f3] flex flex-col items-center justify-center gap-y-5">
          <p>Connect With Us</p>
          <div>
            <ul className="flex flex-row flex-nowrap gap-x-6">
              <li className="border rounded-full p-2 flex items-center justify-center cursor-pointer duration-300 group hover:bg-[#316FF6] hover:border-[#316FF6]">
                <a href="https://www.facebook.com/aimskabirwala">
                  <svg
                    className="w-[30px] h-[30px] fill-white group-hover:fill-black"
                    viewBox="0 0 32 32"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="border rounded-full p-2 flex items-center justify-center cursor-pointer duration-300 group hover:bg-[#25D366] hover:border-[#25D366]">
                <a href="https://wa.me/923009279148">
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
                      strokeWidth="1"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-300.000000, -7599.000000)"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                            id="whatsapp-[#128]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                </a>
              </li>
              <li className="border rounded-full p-2 flex items-center justify-center cursor-pointer duration-300 group hover:bg-[#BB001B] hover:border-[#BB001B]">
                <a href="mailto:aimskabirwala@gmail.com">
                <svg
                  className="w-[30px] h-[20px] fill-white group-hover:fill-black"
                  viewBox="0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
                  </g>
                </svg>
                </a>
              </li>
              <li className="border rounded-full p-2 flex items-center justify-center cursor-pointer duration-300 group hover:bg-darkerSC hover:border-darkerSC">
                <a href="tel:+923009279148">
                <svg
                  className="w-[30px] h-[20px] fill-white group-hover:fill-black"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"></path>
                  </g>
                </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              className="underline text-secondaryColor duration-200 hover:text-white"
              href="#"
            >
              About dev
            </a>
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center text-[#f3f3f3] ">
          <div className="flex flex-row gap-2 py-2 items-center">
            <img
              className="w-[60px] h-[60px]"
              src="./AIMS-Kabirwala-logo.svg"
              alt="Logo"
            />
            <h5 className="2xl:text-xl xl:text-xl lg:text-lg text-center">
              Ayan Institute Of Medical Sciences , Kabriwala
            </h5>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="20px"
              height="20px"
              className=" fill-secondaryColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"></path>
              </g>
            </svg>
            <h5>+ 92-300-9279148</h5>
          </div>
          <div className=" flex flex-row gap-2 text-nowrap items-center mx-4 mb-3">
            <svg
              className="fill-secondaryColor"
              width="20px"
              height="20px"
              id="Capa_1"
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
            <h5 className="text-sm text-wrap text-center">
              Khanewal Road, Jamil Colony, Kabirwala, Khanewal, Punjab
            </h5>
          </div>
          <div className=" flex flex-row gap-2 text-nowrap items-center mx-4">
            <svg
              className="w-[20px] h-[20px] fill-secondaryColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
              </g>
            </svg>
            <h5>aimskabirwala@gmail.com</h5>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] w-full h-[60px] flex items-center justify-center text-textColor">
        <h6>© Copyright</h6>
      </section>
    </footer>
  );
}

export default Footer;
