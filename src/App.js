import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Maincontent from "./Component/MainContent/Maincontent";
import Nav from "./Component/Navbar/Nav";
import Viewshop from "./Component/ViewShop/Viewshop";
import Noviewshop from "./Component/Noviewshop/Noviewshop";
import Projectcard from "./Component/Projectcard.jsx/Projectcard";
import Webflow from "./Component/Webflow.jsx/Webflow";
import Webflow2 from "./Component/Webflow2/Webflow2";
function App() {
  return (
    <>
      <Nav />
      <Maincontent />
      <Noviewshop />
      <Projectcard/>
      <Viewshop/>
      <Webflow name="Mac - A retro blog & portofolio template"/>
      <Webflow2 name ="Telly - A Webflow template made for your videos."/>
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
