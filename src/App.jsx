import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CarritoProvider from "./components/CarritoProvider";
import Footer from "./components/Footer";
import MainRoutes from "./components/MainRoutes";
import NavBar from "./components/NavBar";

import "./scss/app.scss";

function App() {
 

  return (
    <CarritoProvider>
      <BrowserRouter>
        <NavBar />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </CarritoProvider>
  );
}

export default App;
