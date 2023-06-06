import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Typography,
  Container,
  Box,
  Paper
} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Components
import { auth } from "../config/firebase";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage("");
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Container maxWidth="xs" sx={{ mt: 10}}>
        <Grid container spacing={2}>
          <Typography component="h1" variant="h3" align="center">
            CheckList Daily
            <CheckCircleOutlineIcon color="secondary" sx={{ fontSize: 40 }}></CheckCircleOutlineIcon>
            <Paper elevation={6} >
          <Box sx={{ display: "grid", gap: 2, mt: 10 }}>
            <TextField
              label="Email"
              color = "secondary"
              type="email"
              value={email}
              onChange={onEmailChange}
              required
            />
            <TextField
              label="Password"
              type="password"
              color= "secondary"
              value={password}
              onChange={onPasswordChange}
              required
            />
            {errorMessage && (
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}
            <Button variant="contained" type="submit" color= "secondary" disabled={isLoading}>
              {isLoading ? <CircularProgress size="2rem" /> : "Login"}
            </Button>
          </Box>
          </Paper>
          </Typography>
        </Grid>
      </Container>
    </form>
  );
};

export default LoginForm;
