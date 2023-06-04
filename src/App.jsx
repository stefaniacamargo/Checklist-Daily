import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

// Components

//Pages

import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Home } from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
