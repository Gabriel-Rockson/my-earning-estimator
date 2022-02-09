import React from 'react';

import EstimatorForm from './components/EstimatorForm';
import EstimatorResults from './components/EstimatorData';

function App() {
  return (
    <>
      <div className='w-full bg-slate-900 min-h-screen flex justify-around'>

        <div className='lg:w-4/5 xl:3/4 2xl:w-3/5 self-center'>
          <h1 class="text-white text-2xl font-bold text-center py-5">Potential Earnings Estimator For A Freelancer</h1>
          <div className='lg:bg-slate-700 self-center lg:py-10 lg:px-10'>
            <div className='flex space-x-10'>
              <EstimatorForm />
              <EstimatorResults />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
