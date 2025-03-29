import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="p-6 max-w-sm mx-auto bg-gray-800 rounded-xl shadow-lg">
      <div className="text-center space-y-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;