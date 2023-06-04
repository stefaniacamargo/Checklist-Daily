import { useState } from "react";
import { Grid, TextField, Button, CircularProgress, Alert, Typography } from "@mui/material";
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
      navigate('/home');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h3">
            Welcome
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={onEmailChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </Grid>
        {errorMessage && (
          <Grid item xs={12}>
            <Alert severity="error">
              {errorMessage}
            </Alert>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size="2rem" /> : "Login"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
