import { Outlet } from "react-router-dom";

const Layout = () => {
  return (

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
      <div className="text-center space-y-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;