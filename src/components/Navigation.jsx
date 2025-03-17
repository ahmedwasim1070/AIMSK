import { Link } from "react-router-dom";
import SocialNav from "./SocialNav";
import aimskLogo from "../assets/svg/aimsk-logo.svg";
import {
  HomeIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import data from "../assets/data/data.json";

const Navigation = () => {
  const navIcons = [
    <HomeIcon className="lg:size-10 xxs:size-8" />,
    <CurrencyDollarIcon className="lg:size-10 xxs:size-8" />,
    <BookOpenIcon className="lg:size-10 xxs:size-8" />,
    <InformationCircleIcon className="lg:size-10 xxs:size-8" />,
  ];

  return (
    <>
      <div className="flex flex-col h-[87vh] py-4 justify-between bg-primaryColor text-white">
        <div className="w-full flex flex-row items-center justify-center p-5 xl:gap-x-10 md:gap-x-5 xxs:gap-x-3">
          <img
            src={aimskLogo}
            className="xl:w-18 sm:w-16 xxs:w-12"
            alt="Ayan Institute of Medical Sciences Kabirwala Logo"
          />
          <h1 className="text-center xl:text-2xl lg:text-2xl sm:text-xl ">
            Ayan Institute of Medical Sciences Kabirwala
          </h1>
        </div>
        <nav className="sm:px-[10%] xxs:px-4">
          <ul className="flex flex-col gap-y-6 text-2xl">
            {data.contents.map(({content,link}, index) => (
              <>
                <hr />
                <li key={index}>
                  <Link
                    className="sm:px-10 xxs:px-2 flex flex-row justify-between items-center rounded-sm hover:bg-lightPrimary"
                    to={link}
                  >
                    <p className="sm:text-xl xxs:text-[18px]">{content}</p>
                    {navIcons[index]}
                  </Link>
                </li>
              </>
            ))}
            <hr />
          </ul>
        </nav>
        <div>
          <div className="w-full flex justify-center ">
            <SocialNav />
          </div>
          <nav className="w-full flex justify-center">
            <ul className="flex flex-row gap-x-10">
              {data.secondaryNav.map(({ content, link }, index) => (
                <li key={index}>
                  <a
                    className="lg:text-md xxs:text-sm text-center text-nowrap underline duration-75 hover:text-secondaryColor"
                    href={link}
                  >
                    {content}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
