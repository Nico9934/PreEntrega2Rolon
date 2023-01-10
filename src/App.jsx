import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./scss/app.scss";

function App() {
  return (
      <>
        <NavBar></NavBar>
          <ItemListContainer></ItemListContainer>
          <ItemDetailContainer></ItemDetailContainer>
          
        <Footer></Footer>
      </>    
  );
}

export default App;
