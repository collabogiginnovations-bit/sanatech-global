import React from "react";
import DashboardWrapper from "./DashboardWrapper";
import { Navigate, Outlet } from "react-router-dom";

const HideDashboard = () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <DashboardWrapper>
      <Outlet /> 
    </DashboardWrapper>
  );
};

export default HideDashboard;
