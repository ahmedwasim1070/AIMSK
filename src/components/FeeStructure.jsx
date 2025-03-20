import data from "../assets/data/data.json";
const FeeStructure = () => {
  return (
    <>
      <section>
        <h2 className="text-center text-3xl font-bold text-textColor pb-12">
          Fee Structure
        </h2>
        <div className="sm:container  sm:mx-auto xxs:mx-2 flex justify-center items-center sm:overflow-x-visible xxs:overflow-x-scroll">
          <table className="border border-primaryColor">
            <thead>
              <tr className="text-white font-bold rounded-sm">
                {data.thFeeContent.map((content, index) => (
                  <th className="sm:px-[3vw] xxs:px-0 py-2 bg-primaryColor text-xl" key={index}>
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.coursesFees.map(
                (
                  {
                    courseName,
                    courseAdmissionFee,
                    courseMonthlyFee,
                    totalFee,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className="text-center text-lg text-textColor"
                  >
                    <td className="border border-primaryColor/80 sm:px-[3vw] xxs:px-0 py-3 font-bold">
                      {courseName}
                    </td>
                    <td className="border border-primaryColor/80 sm:px-[3vw] xxs:px-0 py-3  after:content-['/One-Time'] after:text-[14px] after:relative after:left-1 after:-bottom-1 after:font-bold">
                      {courseAdmissionFee}
                    </td>
                    <td className="border border-primaryColor/80 sm:px-[3vw] xxs:px-0 py-3  after:content-['/Monthly'] after:text-[14px] after:relative after:left-1 after:-bottom-1 after:font-bold">
                      {courseMonthlyFee}
                    </td>
                    <td className="border border-primaryColor/80 sm:px-[3vw] xxs:px-0 py-3">
                      {totalFee}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <aside className="container mx-auto text-center text-textColor pt-12">
          <p>
            <strong>5,000 rupees</strong> additional fees may apply each year
            for 2 years. In case of supplementary, the fee will be paid again.
            This fee is <strong>governmental</strong> and can increase further.
            Additionally No charges may apply.
          </p>
        </aside>
        <hr className="container mx-auto border-2 border-primaryColor rounded-full my-20" />
        <h2 className="text-center text-3xl font-bold text-textColor pb-12">
          Eligibility Criteria
        </h2>
        <div className="sm:container sm:mx-auto xxs:mx-2 flex justify-center items-center sm:overflow-x-visible xxs:overflow-x-scroll">
          <table className="border border-primaryColor">
            <thead>
              <tr className="text-white font-bold rounded-sm">
                {data.thCourseReqContents.map((content, index) => (
                  <th className="sm:px-[6vw] xxs:px-0 py-2 bg-primaryColor text-xl" key={index}>
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.courseReq.map(({ courseName, degree, subject }, index) => (
                <tr key={index} className="text-center text-textColor">
                  <td className="border border-primaryColor/80 text-lg sm:px-[6vw] xxs:px-0 py-3 font-bold">
                    {courseName}
                  </td>
                  <td className="border border-primaryColor/80 text-lg sm:px-[6vw] xxs:px-0 py-3">
                    {degree}
                  </td>
                  <td className="border border-primaryColor/80 sm:px-[6vw] xxs:px-0 py-3">
                    {subject}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="container mx-auto text-center text-textColor pt-12">
          <p>
            The eligibility criteria is <strong>government-based</strong>. If
            the subject mentioned has not been studied in matric, it will not be
            possible for the applicant to get admission in their required field.
          </p>
        </aside>
        <hr className="container mx-auto border-2 border-primaryColor rounded-full my-20" />
        <h2 className="text-center text-3xl font-bold text-textColor pb-12">
          Document Requirments
        </h2>
        <div className="sm:container sm:mx-auto xxs:mx-2 flex justify-center items-center sm:overflow-x-visible xxs:overflow-x-scroll">
          <table className="border border-primaryColor">
            <thead>
              <tr className="text-white font-bold rounded-sm">
                {data.thDocReqContents.map((content, index) => (
                  <th className="sm:px-[6vw] xxs:px-10 py-2 bg-primaryColor text-xl" key={index}>
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.docReq.map(({ docName,numbOf }, index) => (
                <tr key={index} className="text-center text-textColor">
                  <td className="border border-primaryColor/80 text-lg sm:px-[6vw] py-3 font-bold">
                    {docName}
                  </td>
                  <td className="border border-primaryColor/80 text-lg sm:px-[6vw] py-3 after:content-['/Colored'] after:relative after:-botom-1 after:left-1 after:text-[14px] after:font-bold">
                    {numbOf}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FeeStructure;
