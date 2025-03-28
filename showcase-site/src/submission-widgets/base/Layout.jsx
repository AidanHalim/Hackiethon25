import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Layout = () => {
  const handleBackClick = () => {
    if (location.pathname === '/star-page') {
      navigate('/home');
    } else if (location.pathname === '/test') {
      navigate('/other-page');
    } else {
      navigate(-1);
    }
  };

  return (

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
      <div className="text-center space-y-4">
        <Outlet />

        <Grid container rowSpacing={1} columns={3}>
          <Grid size={1}>
            <Button onClick={handleBackClick}>Back</Button>
          </Grid>
          <Grid size={1}></Grid>

          <Grid size={1}>
            <Button onClick={handleBackClick}>Menu</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Layout;