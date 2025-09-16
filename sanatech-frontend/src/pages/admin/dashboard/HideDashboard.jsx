import React, { useEffect, useState } from "react";
import DashboardWrapper from "./DashboardWrapper";
import { Navigate, Outlet } from "react-router-dom";
import base_url from "../../../components/morrisco/Base_url";

const HideDashboard = () => {
  const [isAuth, setIsAuth] = useState(null); // null = loading, true = ok, false = unauthorized
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const checkJwtToken = async () => {
      if (!token) {
        setIsAuth(false);
        return;
      }

      try {
        const response = await fetch(`${base_url}/admin-dashboard`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        if (response.ok) {
          const res = await response.json();
          console.log("Dashboard response:", res);
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuth(false);
      }
    };

    checkJwtToken();
  }, [token]);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  if (isAuth === false) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <DashboardWrapper>
      <Outlet />
    </DashboardWrapper>
  );
};

export default HideDashboard;
