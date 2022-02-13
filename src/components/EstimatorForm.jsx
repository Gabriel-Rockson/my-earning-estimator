import cc from "currency-codes";
import { useState } from "react";

// TODO - put the currency as a prefix in the input field
function EstimatorForm({ handleInputChange, values }) {
  const [disableHourlyRateInput, setDisableHourlyRateInput] = useState(true);
  const [disableHoursPerDayInput, setdisableHoursPerDayInput] = useState(true);

  const toggleDisableHourlyRateInput = () =>
    setDisableHourlyRateInput(!disableHourlyRateInput);
  const toggleDisableHoursPerDayInput = () =>
    setdisableHoursPerDayInput(!disableHoursPerDayInput);

  return (
    <>
      <div className="w-full md:w-2/5 bg-slate-900 px-3 md:px-5 py-5 md:py-2">
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
              className="form-input-1"
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
            <label htmlFor="hourly-earnings" className="form-label">
              Your Hourly Rate
            </label>
            <div className="flex space-x-1">
              <span className="text-black text-sm font-bold self-center absolute pl-4">
                {values.currency}
              </span>
              <input
                onChange={handleInputChange}
                value={values.hourlyRate}
                id="hourly-earnings"
                name="hourlyRate"
                type="text"
                className="form-input"
                disabled={disableHourlyRateInput}
              />
              {disableHourlyRateInput ? (
                <button
                  type="button"
                  onClick={toggleDisableHourlyRateInput}
                  className="bg-green-700 px-2 text-white"
                >
                  unlock
                </button>
              ) : (
                <button
                  type="button"
                  onClick={toggleDisableHourlyRateInput}
                  className="bg-red-600 px-2 text-white"
                >
                  lock
                </button>
              )}
            </div>
            <small className="form-helptext">amount earned per hour.</small>
          </div>

          <div className="form-item-container">
            <label htmlFor="" className="form-label">
              Total work hours per day
            </label>
            <div className="flex space-x-1">
              <select
                onChange={handleInputChange}
                value={values.hoursPerDay}
                id="total-hours-per-day"
                name="hoursPerDay"
                className="form-input-1"
                disabled={disableHoursPerDayInput}
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
              {disableHoursPerDayInput ? (
                <button
                  type="button"
                  onClick={toggleDisableHoursPerDayInput}
                  className="bg-green-700 px-2 text-white"
                >
                  unlock
                </button>
              ) : (
                <button
                  type="button"
                  onClick={toggleDisableHoursPerDayInput}
                  className="bg-red-600 px-2 text-white"
                >
                  lock
                </button>
              )}
            </div>
            <small className="form-helptext">hours worked per day.</small>
          </div>
          <hr className="py-1 border-slate-700" />

          <div className="form-item-container">
            <label htmlFor="yearly-earnings" className="form-label">
              Yearly Estimate
            </label>
            <div className="flex space-x-1">
              <span className="text-black text-sm font-bold self-center absolute pl-4">
                {values.currency}
              </span>
              <input
                onChange={handleInputChange}
                value={values.yearlyEstimate}
                id="yearly-earnings"
                name="yearlyEstimate"
                type="text"
                className="form-input"
              />
            </div>
            <small className="form-helptext">
              average amount earned per year
            </small>
          </div>

          <div className="form-item-container">
            <label htmlFor="monthly-earnings" className="form-label">
              Monthly Earning
            </label>
            <div className="flex space-x-1">
              <span className="text-black text-sm font-bold self-center absolute pl-4">
                {values.currency}
              </span>
              <input
                onChange={handleInputChange}
                value={values.monthlyEarnings}
                id="monthly-earnings"
                name="monthlyEarnings"
                type="text"
                className="form-input"
              />
            </div>
            <small className="form-helptext">
              average amount earned per month
            </small>
          </div>

          <div className="form-item-container">
            <label htmlFor="weekly-earnings" className="form-label">
              Weekly Earning
            </label>
            <div className="flex space-x-1">
              <span className="text-black text-sm font-bold self-center absolute pl-4">
                {values.currency}
              </span>
              <input
                onChange={handleInputChange}
                value={values.weeklyEarnings}
                id="weekly-earnings"
                name="weeklyEarnings"
                type="text"
                className="form-input"
              />
            </div>
            <small className="form-helptext">
              average amount earned per week
            </small>
          </div>
        </form>
      </div>
    </>
  );
}

export default EstimatorForm;
