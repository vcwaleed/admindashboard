import React, { useState, useEffect } from 'react';
import { IoBagHandleSharp } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import ProgressCircle from './ProgressCircle';

function DashboardStartGrid() {
  // Initialize state for each progress bar
  const [productPercentage, setProductPercentage] = useState(0);
  const [customerPercentage, setCustomerPercentage] = useState(0);
  const [orderPercentage, setOrderPercentage] = useState(0);
  const [otherPercentage, setOtherPercentage] = useState(0);

  // Set the target percentages when the component mounts
  useEffect(() => {
    setProductPercentage(50); 
    setCustomerPercentage(75); 
    setOrderPercentage(65); 
    setOtherPercentage(85); 
  }, []);

  return (
    <div className="flex gap-4 flex-row w-[490px] h-[15rem] bg-white shadow-lg rounded-lg">


      <div className="flex flex-col gap-2 w-full ">


        <BoxWrapper>
          <div className="flex items-center">
            <ProgressCircle targetPercentage={productPercentage}>
              <IoBagHandleSharp className="text-2xl" />
            </ProgressCircle>
            <div className="px-4">
              <span className="text-medium font-light">Total Product</span>
              <div className="flex items-center mt-1">
                <strong className="text-lg">500</strong>
                <span className="text-sm text-green-500 pl-2">+2</span>
              </div>
            </div>
          </div>
        </BoxWrapper>

        <BoxWrapper>
          <div className="flex items-center">
            <ProgressCircle targetPercentage={customerPercentage}>
              <FaUserCheck className="text-2xl" />
            </ProgressCircle>
            <div className="px-4">
              <span className="text-medium font-light">Total Customer</span>
              <div className="flex items-center mt-1">
                <strong className="text-lg">300</strong>
                <span className="text-sm text-green-300 pl-2">+5</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <BoxWrapper>
          <div className="flex items-center">
            <ProgressCircle targetPercentage={orderPercentage}>
              <FaCartPlus className="text-2xl" />
            </ProgressCircle>
            <div className="px-4">
              <span className="text-medium font-light">Total Order</span>
              <div className="flex items-center mt-1">
                <strong className="text-lg">500</strong>
                <span className="text-sm text-green-300 pl-2">+2</span>
              </div>
            </div>
          </div>
        </BoxWrapper>

        <BoxWrapper>
          <div className="flex items-center">
            <ProgressCircle targetPercentage={otherPercentage}>
              <IoBagHandleSharp className="text-2xl" />
            </ProgressCircle>
            <div className="px-4">
              <span className="text-medium font-light">Total Product</span>
              <div className="flex items-center mt-1">
                <strong className="text-lg">500</strong>
                <span className="text-sm text-green-300 pl-2">+2</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
      </div>
    </div>
  );
}

export default DashboardStartGrid;

// function BoxWrapper({ children }) {
//   return (
//     <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center shadow-lg">
//       {children}
//     </div>
//   );
// }

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
      {children}
    </div>
  );
}
