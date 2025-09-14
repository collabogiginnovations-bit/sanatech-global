import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/staticComponents/Sidebar";
import { useState } from "react";

const AdminLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const hideSidebar =
    location.pathname === "/admin/" || location.pathname === "/admin" || location.pathname === "/admin/login";

  return (
    <div >
      <div className="w-screen flex justify-center bg-[#29166F] text-white h-16 items-center  fixed ">
        <h1 className="font-bold text-2xl">Sanatech Admin Dashboard</h1>
      </div>
      <div className="flex min-h-screen ">
        {!hideSidebar && <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />}
        <div
          className={`flex-1 transition-all duration-300 ${hideSidebar ? "ml-0" : collapsed ? "ml-20" : "ml-64"
            }`}
        >
          <Outlet context={{ collapsed }} />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
