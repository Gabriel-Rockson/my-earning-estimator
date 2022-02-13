import React, { useState, useEffect } from "react";

import EstimatorForm from "./components/EstimatorForm";
import EstimatorResults from "./components/EstimatorData";

function App() {
  const initialValues = {
    currency: "",
    yearlyEstimate: "",
    monthlyEarnings: "",
    weeklyEarnings: "",
    hourlyRate: "",
    hoursPerDay: "",
  };

  const [values, setValues] = useState(initialValues);

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
              <EstimatorResults />
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
