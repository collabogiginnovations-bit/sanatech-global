import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const EditServicesLayout = () => {


  return (
    <div className="p-6 mt-20">


      {/* Content Area */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default EditServicesLayout;
