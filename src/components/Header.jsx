import aimskLogo from "../assets/svg/aimsk-logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = ({ showNav, setShowNav }) => {
  return (
    <>
      <div className="h-[120px] sticky top-0 z-50 bg-white flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-5 pl-4">
          <span>
            <img
              className="w-[65px] h-[85px]"
              src={aimskLogo}
              alt="Ayan Intitute Of Medical Sciences Kabriwala Logo"
            />
          </span>
          <h1 className="xs:flex xxs:hidden flex-col w-[250px] text-textColor">
            <span className="text-3xl">Ayan</span>
            <span className="text-center text-lg">
              Institute Of Medical Sciences
            </span>
            <span className="text-xl">Kabirwala</span>
          </h1>
        </div>
        <button
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="cursor-pointer h-full bg-primaryColor flex flex-row items-center gap-x-4 text-white px-4 duration-100 hover:bg-textColor"
        >
          <span>
            {showNav ? (
              <XMarkIcon className="size-10" />
            ) : (
              <Bars3Icon className="size-10" />
            )}
          </span>
          <p className="text-2xl sm:block xs:hidden xxs:hidden">
            {!showNav ? "Menu" : "Close"}
          </p>
        </button>
      </div>
    </>
  );
};

export default Header;
