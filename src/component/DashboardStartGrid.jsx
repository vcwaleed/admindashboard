import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";



function DashboardStartGrid() {
  return (
    <div className="flex  w-full gap-4 ">
      <BoxWrapper>
        <div className="flex justify-center bg-sky-500 rounded-full  h-12 w-12 items-center ">
          <IoBagHandleSharp className="text-2xl text-white" />
        </div>
        <div className="px-2">
          <span className="text-medium font-light ">Total Product</span>
          <div className="flex px-6 items-center">
            <strong>500</strong>
            <span className="text-sm text-green-300 pl-2">+2</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className="flex justify-center bg-red-500 rounded-full  h-12 w-12 items-center ">
          
          <FaUserCheck className="text-2xl text-white"/>
        </div>
        <div className="px-2">
          <span className="text-medium font-light ">Total Customer</span>
          <div className="flex px-6 items-center">
            <strong>300</strong>
            <span className="text-sm text-green-300 pl-2">+5</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className="flex justify-center bg-sky-500 rounded-full  h-12 w-12 items-center ">
          <FaCartPlus  className="text-2xl text-white" />
        </div>
        <div className="px-2">
          <span className="text-medium font-light ">Total Order</span>
          <div className="flex px-6 items-center">
            <strong>500</strong>
            <span className="text-sm text-green-300 pl-2">+2</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper> <div className="flex justify-center bg-sky-500 rounded-full  h-12 w-12 items-center ">
          <IoBagHandleSharp className="text-2xl text-white" />
        </div>
        <div className="px-2" >
          <span className="text-medium font-light ">Total Product</span>
          <div className="flex px-6 items-center">
            <strong>500</strong>
            <span className="text-sm text-green-300 pl-2">+2</span>
          </div>
        </div></BoxWrapper>
    </div>
  );
}

export default DashboardStartGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center shadow-lg ">
      {children}
    </div>
  );
}
