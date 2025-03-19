import data from "../assets/data/data.json";
const FeeStructure = () => {
  return (
    <>
      <section>
        <div className="container mx-auto flex justify-center items-center">
          <table className="border border-primaryColor">
            <thead >
              <tr className="text-white font-bold rounded-sm">
                {data.thFeeContent.map((content, index) => (
                  <th
                    className="px-8 py-2 bg-primaryColor text-xl"
                    key={index}
                  >
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.coursesFees.map(
                ({
                  courseName,
                  courseAdmissionFee,
                  courseMonthlyFee,
                  totalFee,
                },index) => (
                  <tr key={index} className="text-center text-lg text-textColor">
                    <td className="px-10 py-2 border border-primaryColor/80">{courseName}</td>
                    <td className="px-10 py-2 border border-primaryColor/80">{courseAdmissionFee}</td>
                    <td className="px-10 py-2 border border-primaryColor/80">{courseMonthlyFee}</td>
                    <td className="px-10 py-2 border border-primaryColor/80">{totalFee}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FeeStructure;
