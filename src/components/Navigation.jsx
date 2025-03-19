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
    <HomeIcon className="size-[4vh]" />,
    <CurrencyDollarIcon className="size-[4vh]" />,
    <BookOpenIcon className="size-[4vh]" />,
    <InformationCircleIcon className="size-[4vh]" />,
  ];

  return (
    <>
      <div className=" w-full h-full bg-primaryColor flex flex-col justify-between items-center gap-y-[5vh] text-white py-[3vh]">
        <div className="flex flex-row justify-center items-center gap-x-4">
          <img
            className="w-[9vh] "
            src={aimskLogo}
            alt="Ayan Intitue of Medical Sceinces Kabirwala Logo"
          />
          <h1 className="text-[3vh]">
            Ayan Intitute Of Medical Sciences Kabirwala
          </h1>
        </div>
        <nav className="w-[75%]">
          <ul>
            {data.contents.map(({ content, link }, index) => (
              <>
                <hr />
                <li key={index} className=" py-[2vh] mx-[4vh]">
                  <Link
                    className="flex flex-row justify-between item-center hover:bg-textColor "
                    to={link}
                  >
                    <p className="text-[3vh]">{content}</p>
                    {navIcons[index]}
                  </Link>
                </li>
              </>
            ))}
            <hr />
          </ul>
        </nav>
        <div>
          <nav>
            <ul className="flex flex-row gap-x-4">
              {data.secondaryNav.map(({ content, link }, index) => (
                <li key={index}>
                  <Link
                    className="underline text-[2vh] hover:text-secondaryColor"
                    to={link}
                  >
                    {content}
                  </Link>
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
