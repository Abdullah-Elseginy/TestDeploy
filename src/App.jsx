import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import {
  MyThemeProvider,
  MyThemeProviderContext,
} from "./Context/ThemeContext";
import { CssBaseline } from "@mui/material";

export function Routers() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
const App = () => {
  return (
    <>
      <MyThemeProviderContext>
        <CssBaseline>
          <Routers />
        </CssBaseline>
      </MyThemeProviderContext>
    </>
  );
};

export default App;
