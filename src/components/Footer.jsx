import data from "../assets/data/data.json";
import aimsk from "../assets/svg/aimsk-logo.svg";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import SocialNav from "../components/SocialNav";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-primaryColor text-white">
          <div className="py-10 container mx-auto flex xl:flex-row xxs:flex-col justify-evenly gap-x-10 gap-y-20 items-center">
            <ul className="flex flex-col gap-y-5 ">
              {data.secondaryNav.map(({ content, link }, index) => (
                <li key={index}>
                  <a
                    className="underline hover:text-secondaryColor"
                    href={link}
                  >
                    {content}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-y-1 justify-center items-center">
              <p className="text-secondaryColor">Connect With Us</p>
              <SocialNav />
              <a
                className="text-secondaryColor cursor-pointer underline hover:text-white"
                href="https://github.com/ahmedwasim1070"
              >
                About-dev
              </a>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-y-4">
              <div className="flex flex-row gap-x-5 items-center">
                <img
                  className="w-12"
                  src={aimsk}
                  alt="Ayan Institute Of Medical Sciences Kabirwala Logo"
                />
                <h5 className="text-xl">
                  Ayan Institute Of Medical Sciences Kabirwala
                </h5>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <PhoneIcon className="size-5 fill-secondaryColor" />
                <h6>0300-9279148 / 0300-7050624 / 0333-3202043</h6>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <MapPinIcon className="size-5 fill-secondaryColor" />
                <h6>
                  Near New Buss Sand , Main Street, Jameel Colony , Kabirwala
                </h6>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <EnvelopeIcon className="size-5 fill-secondaryColor" />
                <h6>aimskabirwala@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 text-textColor text-lg text-center">
          <h6>© Copyright . All Rights Reserved</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
