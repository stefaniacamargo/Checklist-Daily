import { Grid, TextField, Button } from "@mui/material";

export const Auth = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Username" />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Password" type="password" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Login</Button>
      </Grid>
    </Grid>
  );
};

export default Auth;
