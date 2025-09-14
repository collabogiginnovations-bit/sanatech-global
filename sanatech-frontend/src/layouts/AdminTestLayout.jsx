import { Outlet } from "react-router-dom";
import Navbar from "../components/staticComponents/Navbar";

const AdminTestLayout = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <Outlet />
    </div>
  )
}

export default AdminTestLayout