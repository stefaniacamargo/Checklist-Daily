import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  // CircularProgress,
  // Alert,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const FormContainer = styled(Box)`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 8rem;
`;
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <FormContainer component="form" onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            textAlign="center"
            component="h1"
            variant="h5"
            align="center"
          >
            Please enter your details below to register
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Name"
            color="primary"
            type="text"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            color="primary"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            color="primary"
            value={password}
            onChange={handlePasswordChange}
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
            color="primary"
            disabled={isLoading}
            fullWidth
          >
            Sign In{" "}
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default RegisterForm;
