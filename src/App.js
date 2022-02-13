import React, { useState, useEffect } from "react";

import EstimatorForm from "./components/EstimatorForm";
import EstimatorResults from "./components/EstimatorData";

function App() {
  const initialValues = {
    currency: "USD",
    yearlyEstimate: 0.0,
    monthlyEarnings: 0.0,
    weeklyEarnings: 0.0,
    dailyEarnings: 0.0,
    hourlyRate: 20,
    hoursPerDay: 6,
    hoursPerWeek: 0,
    hoursPerMonth: 0,
    hoursPerYear: 0,
  };

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    const dailyEarnings = (values.hourlyRate * values.hoursPerDay).toFixed(2);
    const weeklyEarnings = (dailyEarnings * 7).toFixed(2);
    const monthlyEarnings = (weeklyEarnings * 4).toFixed(2);
    const yearlyEstimate = (monthlyEarnings * 12).toFixed(2);

    const hoursPerWeek = values.hoursPerDay * 7;
    const hoursPerMonth = hoursPerWeek * 4;
    const hoursPerYear = hoursPerMonth * 12;

    setValues({
      ...values,
      dailyEarnings,
      weeklyEarnings,
      monthlyEarnings,
      yearlyEstimate,
      hoursPerWeek,
      hoursPerMonth,
      hoursPerYear,
    });
  }, [values.hourlyRate, values.hoursPerDay]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div className="w-full bg-neutral-900 min-h-screen flex justify-around py-5 md:py-0">
        <div className="lg:w-11/12 xl:w-3/4 2xl:w-3/5 self-center md:px-5">
          <h1 className="text-white text-2xl sm:text-2xl font-bold text-center py-5 px-2">
            Potential{" "}
            <span className="text-green-400">
              Earning<span className="text-green-600">$</span>
            </span>{" "}
            Estimator For <span className="text-yellow-400">Freelancers</span>
          </h1>
          <div className="md:bg-slate-800 self-center md:p-5 lg:p-10">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-2 lg:space-x-10 px-3">
              <EstimatorForm
                handleInputChange={handleInputChange}
                values={values}
              />
              <EstimatorResults
                currency={values.currency}
                yearlyEstimate={values.yearlyEstimate}
                monthlyEarnings={values.monthlyEarnings}
                weeklyEarnings={values.weeklyEarnings}
                dailyEarnings={values.dailyEarnings}
                hoursPerDay={values.hoursPerDay}
                hoursPerWeek={values.hoursPerWeek}
                hoursPerMonth={values.hoursPerMonth}
                hoursPerYear={values.hoursPerYear}
                hourlyRate={values.hourlyRate}
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="fixed text-yellow-600 bottom-0 left-0 py-1 px-1">
        Built by Gabriel Rockson
      </h1>
    </>
  );
}

export default App;
