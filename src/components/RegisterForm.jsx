import {
  Grid,
  TextField,
  Button,
  // CircularProgress,
  // Alert,
  Typography,
  Container,
  Box,
  Paper
} from "@mui/material";


// import { auth } from "../config/firebase";

export const RegisterForm = () => {
  return (
    <form >
      <Container maxWidth="xs" sx={{ mt: 10}}>
        <Grid container spacing={2}>
          <Typography component="h1" variant="h3" align="center">
            CheckList Daily
            <Paper elevation={6} >
          <Box sx={{ display: "grid", gap: 2, mt: 10 }}>
            <TextField
              label="Email"
              color = "secondary"
              type="email"
              value
              onChange
              required
            />
            <TextField
              label="Password"
              type="password"
              color= "secondary"
              value
              onChange
              required
            />
            <Button variant="contained" type="submit" color= "secondary">
            Register
            </Button>
          </Box>
          </Paper>
          </Typography>
        </Grid>
      </Container>
    </form>
  )
}

export default RegisterForm; 