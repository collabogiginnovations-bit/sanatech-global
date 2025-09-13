import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const adminPath = import.meta.env.VITE_ADMIN_PATH?.replace(/^\//, '') || 'admin-very-secret';

export default function RequireAdmin() {
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(`${API}/api/admin/verify`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!mounted) return;
        if (res.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (err) {
        setOk(false);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="p-10">Checking admin session...</div>;
  if (!ok) {
    // redirect to login page. Use state to preserve post-login redirect if needed
    return <Navigate to={`/${adminPath}/login`} replace state={{ from: location }} />;
  }
  // authorized — render child routes
  return <Outlet />;
}
