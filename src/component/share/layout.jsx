import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Header from './header'

function layout() {
  return (
    <div className=' flex flex-row bg-neutral-100  w-screen h-screen overflow-hidden'>
     
      <Sidebar />
    <div className='flex flex-col w-screen '>
      <Header/>
      <Outlet />
      </div>

    </div>
  )
}

export default layout
