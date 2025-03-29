import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="w-[300px] h-[300px] p-6 mx-auto bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4">
      <div className="text-center space-y-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;