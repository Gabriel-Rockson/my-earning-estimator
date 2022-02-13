function EstimatorResults({
  currency,
  yearlyEstimate,
  monthlyEarnings,
  weeklyEarnings,
  dailyEarnings,
  hoursPerDay,
  hoursPerWeek,
  hoursPerMonth,
  hoursPerYear,
  hourlyRate,
}) {
  return (
    <>
      <div className="w-full md:w-3/5 py-5 md:py-0">
        <h1 className="section-heading">Estimator Data</h1>
        <table className="table-auto border border-slate-800 w-full">
          <thead>
            <tr className="border-collapse border border-b border-slate-800">
              <th className="table-heading-entry">Parameter</th>
              <th className="table-heading-entry w-36">Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="table-data-entry-1">Average Yearly Earnings</td>
              <td className="table-data-entry-2">
                <span className="text-green-400 text-sm font-bold">
                  {currency}
                </span>{" "}
                {yearlyEstimate}
              </td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Average Monthly Earnings</td>
              <td className="table-data-entry-2">
                <span className="text-green-400 text-sm font-bold">
                  {currency}
                </span>{" "}
                {monthlyEarnings}
              </td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Average Weekly Earnings</td>
              <td className="table-data-entry-2">
                <span className="text-green-400 text-sm font-bold">
                  {currency}
                </span>{" "}
                {weeklyEarnings}
              </td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Average Daily Earnings</td>
              <td className="table-data-entry-2">
                <span className="text-green-400 text-sm font-bold">
                  {currency}
                </span>{" "}
                {dailyEarnings}
              </td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Hourly Rate</td>
              <td className="table-data-entry-2">
                <span className="text-green-400 text-sm font-bold">
                  {currency}
                </span>{" "}
                {hourlyRate}
              </td>
            </tr>

            <tr>
              <td className="table-data-entry-1">
                Total Hours To Work Per Year
              </td>
              <td className="table-data-entry-2">{hoursPerYear}</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">
                Total Hours To Work Per Month
              </td>
              <td className="table-data-entry-2">{hoursPerMonth}</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">
                Total Hours To Work Per Week
              </td>
              <td className="table-data-entry-2">{hoursPerWeek}</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">
                Total Hours To Work Per Day
              </td>
              <td className="table-data-entry-2">{hoursPerDay}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EstimatorResults;
