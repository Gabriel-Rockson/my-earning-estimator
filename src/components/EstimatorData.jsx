function EstimatorResults() {
  return (
    <>
      <div className="w-3/5">
        <h1 className="section-heading">Estimator Data</h1>
        <table className="table-auto border border-slate-800 w-full">
          <thead>
            <tr className="border-collapse border border-b border-slate-800">
              <th className="table-heading-entry">Parameter</th>
              <th className="table-heading-entry">Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="table-data-entry-1">Average Yearly Earnings</td>
              <td className="table-data-entry-2">$ 70,000</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Average Monthly Earnings</td>
              <td className="table-data-entry-2">$ 5, 830</td>
            </tr>
            
            <tr>
              <td className="table-data-entry-1">Average Weekly Earnings</td>
              <td className="table-data-entry-2">$ 1457.5</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Average Daily Earnings</td>
              <td className="table-data-entry-2">$ 291</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Hourly Rate</td>
              <td className="table-data-entry-2">$ 58</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Total Hours To Work Per Year</td>
              <td className="table-data-entry-2">1206</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Total Hours To Work Per Month</td>
              <td className="table-data-entry-2">100</td>
            </tr>

            <tr>
              <td className="table-data-entry-1">Total Hours To Work Per Week</td>
              <td className="table-data-entry-2">25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EstimatorResults