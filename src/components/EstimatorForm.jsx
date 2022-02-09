function EstimatorForm() {
  return (
    <>
      <div className="w-2/5 bg-slate-900 px-8 py-2 rounded-lg">
        <h1 className="section-heading">Estimator Form</h1>
        <form action="#" className="flex flex-col space-y-1">

          <div className="form-item-container">
            <label htmlFor="" className="form-label">Your Currency</label>
            <select name="" id="" className="form-input">
              <option value="Ghc">Ghc</option>
              <option value="USD" selected>USD</option>
              <option value="GBP">GBP</option>
            </select>
            <small className="form-helptext">Average amount you will earn per week</small>
          </div>

          <div className="form-item-container">
            <label htmlFor="per-year" className="form-label">Yearly Estimate</label>
            <input type="text" className="form-input" />
            <small className="form-helptext">how much do you need in a year?</small>
          </div>

          <div className="form-item-container">
            <label htmlFor="" className="form-label">Monthly Earning</label>
            <input type="text" className="form-input" />
            <small className="form-helptext">Amount you will earn in a month</small>
          </div>

          <div className="form-item-container">
            <label htmlFor="" className="form-label">Weekly Earning</label>
            <select name="" id="" className="form-input">
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
            </select>
            <small className="form-helptext">Average amount you will earn per week</small>
          </div>

          <div className="form-item-container">
            <label htmlFor="" className="form-label">Total work hours per day</label>
            <input type="text" className="form-input" />
            <small className="form-helptext">hours you are willing to work each day.</small>
          </div>

          <div className="form-item-container">
            <label htmlFor="" className="form-label">Hourly Earning</label>
            <input type="text" className="form-input" />
            <small className="form-helptext">This should be your hourly rate</small>
          </div>
        </form>
      </div>
    </>
  )
}

export default EstimatorForm