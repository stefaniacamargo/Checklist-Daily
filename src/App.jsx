import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, CircularProgress } from "@mui/material";

// Components
import { useAuth } from "./authContext";
import { AppNav } from "./components/AppNav";

//Pages

import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Home } from "./Pages/Home";

function App() {
  const { isAuth, user } = useAuth();
  console.log(user);
  
  if (isAuth === null) {
    return <CircularProgress />;
  }

  return (
    <BrowserRouter>
      <AppNav />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
