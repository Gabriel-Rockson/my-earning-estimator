import cc from "currency-codes";
import { useState } from "react";

function EstimatorForm() {
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
      <div className="w-full md:w-2/5 bg-slate-900 px-3 md:px-5 py-5 md:py-2 rounded-lg">
        <h1 className="section-heading">Estimator Form</h1>
        <form action="#" className="flex flex-col space-y-1">
          <div className="form-item-container">
            <label htmlFor="currency" className="form-label">
              Your Currency Code
            </label>
            <input
              onChange={handleInputChange}
              value={values.currency}
              id="currency"
              name="currency"
              list="codes"
              type="text"
              className="form-input"
              placeholder="Enter your country's currency code"
            />
            <datalist name="" id="codes">
              {cc.codes().map((code) => {
                return <option key={code} value={code} />;
              })}
            </datalist>
            <small className="form-helptext">
              type your currency code, e.g: USD
            </small>
          </div>

          <div className="form-item-container">
            <label htmlFor="yearly-earnings" className="form-label">
              Yearly Estimate
            </label>
            <input
              onChange={handleInputChange}
              value={values.yearlyEstimate}
              id="yearly-earnings"
              name="yearlyEstimate"
              type="text"
              className="form-input"
            />
            <small className="form-helptext">
             average amount earned per year
            </small>
          </div>

          <div className="form-item-container">
            <label htmlFor="monthly-earnings" className="form-label">
              Monthly Earning
            </label>
            <input
              onChange={handleInputChange}
              value={values.monthlyEarnings}
              id="monthly-earnings"
              name="monthlyEarnings"
              type="text"
              className="form-input"
            />
            <small className="form-helptext">
              average amount earned per month
            </small>
          </div>

          <div className="form-item-container">
            <label htmlFor="weekly-earnings" className="form-label">
              Weekly Earning
            </label>
            <input
              onChange={handleInputChange}
              value={values.weeklyEarnings}
              id="weekly-earnings"
              name="weeklyEarnings"
              type="text"
              className="form-input"
            />

            <small className="form-helptext">
              average amount earned per week
            </small>
          </div>

          <div className="form-item-container">
            <label htmlFor="" className="form-label">
              Total work hours per day
            </label>
            <select
              onChange={handleInputChange}
              value={values.hoursPerDay}
              id="total-hours-per-day"
              name="hoursPerDay"
              className="form-input"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </select>
            <small className="form-helptext">
              hours worked per day.
            </small>
          </div>

          <div className="form-item-container">
            <label htmlFor="hourly-earnings" className="form-label">
              Your Hourly Rate
            </label>
            <input
              onChange={handleInputChange}
              value={values.hourlyRate}
              id="hourly-earnings"
              name="hourlyRate"
              type="text"
              className="form-input"
            />
            <small className="form-helptext">
              amount earned per hour.
            </small>
          </div>
        </form>
      </div>
    </>
  );
}

export default EstimatorForm;
