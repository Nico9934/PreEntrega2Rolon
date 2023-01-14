import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
