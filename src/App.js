import React from 'react';

import EstimatorForm from './components/EstimatorForm';
import EstimatorResults from './components/EstimatorData';

function App() {
  return (
    <>
      <div className='w-full bg-neutral-900 min-h-screen flex justify-around'>

        <div className='lg:w-11/12 xl:w-3/4 2xl:w-3/5 self-center md:px-5'>
          <h1 class="text-white text-2xl font-bold text-center py-5">
            Potential <span className='text-green-400'>Earning<span className='text-green-600'>$</span></span> Estimator For <span className='text-yellow-400'>Freelancers</span>
          </h1>
          <div className='md:bg-slate-800 self-center md:p-5 lg:p-10'>
            <div className='flex md:space-x-2 lg:space-x-10'>
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
