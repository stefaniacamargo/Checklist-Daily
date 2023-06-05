import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useNavigate } from "react-router-dom";

// Components
import { useAuth } from "../authContext";

export const AppNav = () => {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  const onLogoutClick = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CheckList Daily
            <CheckCircleOutlineIcon />
          </Typography>
          {isAuth && (
            <Button color="inherit" onClick={onLogoutClick}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
