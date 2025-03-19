import data from "../assets/data/data.json";
const CoursesList = () => {
  return (
    <>
      <section className="container mx-auto flex justify-center items-center flex-wrap gap-x-10 gap-y-5 text-center">
        {data.courses.map(
          (
            { courseName, courseImg, courseDescription, courseImgAlt },
            index
          ) => (
            <div key={index} className="sm:w-[450px] xxs:w-[100%] flex flex-col justify-center item-center pb-4 shadow-2xl flex-none">
              <img
                className="h-[250px] rounded-sm"
                src={`/assets/images/${courseImg}`}
                alt={courseImgAlt}
              />
              <h2 className="bg-primaryColor text-white text-xl py-3">{courseName}</h2>
              <p className="py-10 px-2 text-textColor">{courseDescription}</p>
              <div className="py-2">

              <a
                href="#"
                className="text-white py-3 px-5 rounded-sm bg-primaryColor text-lg duration-100 cursor-pointer border border-primaryColor hover:bg-white hover:text-textColor"
              >
                Fee Structure & Eligibility
              </a>
              </div>

            </div>
          )
        )}
      </section>
    </>
  );
};

export default CoursesList;
