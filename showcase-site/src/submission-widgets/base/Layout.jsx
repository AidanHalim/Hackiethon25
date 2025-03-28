import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === '/star-rating') {
      navigate('/');
    } else if (location.pathname === '/goal-review') {
      navigate('/star-rating');
    } else if (location.pathname === '/goal-create') {
      navigate('/goal-review');
    } else if (location.pathname === '/highlights') {
      navigate('/goal-create');
    } else {
      navigate(-1);
    }
    // navigate(-1);
  };

  const handleMenuClick = () => {
    navigate('/');
  }

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
            <Button onClick={handleMenuClick}>Menu</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Layout;