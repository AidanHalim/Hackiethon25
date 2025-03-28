import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from 'react-router-dom';

const JournalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === 'journal/star-rating') {
      navigate('/journal');
    } else if (location.pathname === 'journal/star-rating') {
      navigate('journal/star-rating');
    } else if (location.pathname === 'journal/goal-create') {
      navigate('journal/goal-review');
    } else if (location.pathname === 'journal/highlights') {
      navigate('journal/goal-create');
    } else {
      navigate(-1);
    }
    // navigate(-1);
  };

  const handleMenuClick = () => {
    navigate('/');
  }

  return (

    <div>
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
  );
};

export default JournalLayout;