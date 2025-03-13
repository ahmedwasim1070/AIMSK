import SocialNav from "./SocialNav";
import aimskLogo from "../assets/svg/AIMS-Kabirwala-logo.svg";
import {
  HomeIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import data from "../assets/data/data.json";

const Navigation = ({ showNav, setShowNav }) => {
  const navIcons = [
    <HomeIcon className="size-10" />,
    <BookOpenIcon className="size-10" />,
    <CurrencyDollarIcon className="size-10" />,
    <InformationCircleIcon className="size-10" />,
  ];

  return (
    <>
      <nav className="bg-primaryColor text-white">
        <div className="w-full flex flex-row items-center justify-center p-5 gap-x-10">
          <img
            src={aimskLogo}
            alt="Ayan Institute of Medical Sciences Kabirwala Logo"
          />
          <h1 className="text-3xl ">
            Ayan Institute of Medical Sciences Kabirwala
          </h1>
        </div>
        <div className="py-[15%] px-[10%]">
          <ul className="flex flex-col gap-y-6 text-2xl">
            {data.contents.map((content, index) => (
              <>
                <hr />
                <li className="px-10 flex flex-row justify-between" key={index}>
                  <a href="#">{content}</a>
                  {navIcons[index]}
                </li>
              </>
            ))}
            <hr />
          </ul>
        </div>
        <div className="w-full flex justify-center ">
          <SocialNav />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
