import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import MainRoutes from "./components/MainRoutes";
import NavBar from "./components/NavBar";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <MainRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
