import React from 'react'

import DashboardStartGrid from './DashboardStartGrid';
import TransactionChart from './TransactionChart';
import Userchart from './Userchart';

function dashboard() {
  return (
    <div className='flex   flex-col gap-4'>
    <DashboardStartGrid />
    <div className='flex flex-row gap-4 w-full'>


    <TransactionChart/>
    <Userchart/>

    </div>
    </div>
  )
}

export default dashboard
