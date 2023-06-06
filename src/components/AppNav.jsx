import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ flexGrow: 1, mb: 2 }}
          >
            CheckList Daily
            <CheckCircleIcon sx={{ ml: 1, mt: 2 }} />
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
