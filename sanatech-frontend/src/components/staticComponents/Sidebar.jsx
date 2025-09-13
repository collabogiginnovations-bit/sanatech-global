import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navItems = [
    { to: "/admin/dashboard", label: "Home", icon: <FaHome /> },
    { to: "/admin/edit", label: "Edit Service", icon: <FaEdit /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-[#29166F] shadow-lg transition-all duration-300 z-50
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {!collapsed && <div className={` md:px-10 p-1 w-38 rounded-lg mt-1  `}>
          <img src="/images/logo.png" alt="logo" className={`w-20  rounded-2xl bg-gray-200`} />
        </div>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 text-white text-xl transition-colors duration-300 ease-in hover:text-[#29166F] rounded-md hover:bg-gray-100"
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="mt-6">
        <ul className="space-y-2">
          {navItems.map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 transition rounded-md hover:bg-[#361d91]   text-white font-semibold 
                  ${isActive ? "bg-amber-600  font-semibold hover:bg-amber-700" : "text-gray-700"}`
                }
              >
                <span className="text-xl">{it.icon}</span>
                {!collapsed && <span>{it.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Logout */}
      <div className="absolute bottom-0 left-0 w-full border-t p-4">
        <button className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-[#361d91] text-amber-500 font-semibold text-lg transition-colors duration-300 ease-in">
          <span className="text-xl">
            <FaSignOutAlt />
          </span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
