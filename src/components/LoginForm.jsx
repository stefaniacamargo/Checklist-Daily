import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Typography,
  Box
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';

const FormContainer = styled(Box)`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5rem;
`;

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
    <FormContainer
      component="form"
      onSubmit={onSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            textAlign="center"
            component="h1"
            variant="h5"
            align="center"
          >
            Please enter your details below
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            color="secondary"
            type="email"
            value={email}
            onChange={onEmailChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            color="secondary"
            value={password}
            onChange={onPasswordChange}
            required
            fullWidth
          />
        </Grid>
        {errorMessage && (
          <Grid item xs={12}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            disabled={isLoading}
            fullWidth
          >
            {isLoading ? <CircularProgress size="2rem" /> : "Login"}
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default LoginForm;
