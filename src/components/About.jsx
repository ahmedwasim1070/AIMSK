import ppcLogo from "../assets/svg/ppc-logo.svg";
import pmfLogo from "../assets/svg/pmf-logo.svg";

const About = () => {
  return (
    <>
      <section className="container mx-auto flex flex-row xl:flex-nowrap gap-y-5 xxs:flex-wrap">
        <article className="xl:w-[50%] xxs:w-[100%] white text-textColor sm:px-10 xxs:px-5 py-5 flex-none">
          <h4 className="text-3xl">About Us</h4>
          <p className="sm:px-6 sm:py-6 xxs:px-4 xxs:py-6">
            <strong>Ayan Institute of Medical Sciences Kabirwala</strong> is a
            leading {" "}
            <strong>Pharmacy College in Khanewal, Kabirwala</strong>, offering
            accredited programs in <strong>Lab Technician</strong>,{" "}
            <strong>Dispenser</strong>,<strong>Pharmacy Technician</strong>,{" "}
            <strong>Operation Theater Technician</strong>, and{" "}
            <strong>Radiography</strong>. Since <strong>2021</strong>, the
            college has been {" "}
            <strong>
              officially registered with the Punjab Pharmacy Council Lahore
            </strong>{" "}
            and {" "}
            <strong>Punjab Medical Faculty</strong>. With{" "}
            <strong>over 160 seats</strong>, we are committed to providing{" "}
            <strong>high-quality medical and pharmaceutical education</strong>,
            preparing students for successful careers in the healthcare
            industry.
          </p>
        </article>
        <div className="xl:w-[50%] xxs:w-[100%] flex flex-col rounded-sm text-white justify-center items-center gap-y-10 bg-primaryColor p-4 flex-none">
          <p className="text-center text-3xl">Registered By</p>
          <div className="flex xs:flex-row xxs:flex-col gap-y-5 md:w-[70%] xxs:w-[95%] justify-between">
            <div className="flex flex-col justify-center items-center gap-y-5">
              <div className=" p-4 bg-white rounded-full">
                <img
                  src={ppcLogo}
                  className="md:w-30 xxs:w-20"
                  alt="Punjab Pharmacy Council Lahore Logo"
                />
              </div>
              <p className="text-center text-xl">Punjab Pharmacy Council</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5">
              <div className=" p-4 bg-white rounded-full">
                <img
                  src={pmfLogo}
                  className="md:w-30 xxs:w-20"
                  alt="Punjab Pharmacy Council Lahore Logo"
                />
              </div>
              <p className="text-center text-xl">Punjab Medical Faculty</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
