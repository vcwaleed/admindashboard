import React from "react";
import { dashboardbottom ,lower_links } from "../../lib/constants/Navigaction";
import { Link } from "react-router-dom";
function sidebar() {
  return (
    <div className=" bg-neutral-500 w-60 p-3 flex flex-col text-white ">
      <div className="flex items-center  py-6 ">
        <div className="size-8">
          <img src="admin-icon.png" alt="img"></img>
        </div>
        <span className="p-1 font-bold">Admin Pannel </span>
      </div>

      <div className="flex-1  space-y-3 ">
        {dashboardbottom.map((item) => (
          <div
            key={item.key}
            className="flex items-center hover:bg-neutral-700 py-3 gap-2 "
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
            className="flex "
            >
                {item.icon}
            <Link to={item.path} className="ml-3 ">
              {item.label}
            </Link>



            </div>



        ))}
        
        
         </div>
    </div>
  );
}

export default sidebar;
