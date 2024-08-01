import React from "react";
import { dashboardbottom ,lower_links } from "../../lib/constants/Navigaction";
import { Link } from "react-router-dom";
function sidebar() {
  return (
    <div className=" bg-white w-72 p-3 flex flex-col shadow h-screen overflow-y-auto">

      <div className="flex items-center  py-6  -translate-y-1">
        <div className="size-8">
          <img src="logo12.jpg" alt="img"></img>
        </div>
        <span className="p-1 font-bold items-baseline">PHOTOHUB </span>
      </div>



      <div className="flex-1  space-y-3   text-gray-400  ">
        {dashboardbottom.map((item) => (
          <div
            key={item.key}
            className="flex items-center hover:text-blue-500 py-3 gap-2 "
          >
            {item.icon}
            <Link to={item.path} className="ml-2 ">
              {item.label}
            </Link>
          </div>
        ))}
      </div>

      <div>

        {lower_links.map((item)=>(
            <div key={item.key}
            className="flex  hover:text-blue-400 "
            >
                {item.icon}
            <Link to={item.path} className="ml-3 ">
              {item.label}
            </Link>



            </div>



        ))}
        
        
         </div>


      <div>



      </div>


    </div>
  );
}

export default sidebar;
