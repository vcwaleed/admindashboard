import React from 'react'

import DashboardStartGrid from './DashboardStartGrid';
import TransactionChart from './TransactionChart';
import Userchart from './Userchart';
import HellowCard from './HellowCard';

function dashboard() {
  return (
    <div className='flex   flex-col gap-4  h-screen  overflow-y-auto'>


<div className='flex pt-1 flex-row justify-between '>

  <HellowCard />


    <DashboardStartGrid />




</div>




    <div className='flex flex-row gap-4 w-full'>


    <TransactionChart/>
    <Userchart/>

    </div>
    </div>
  )
}

export default dashboard
