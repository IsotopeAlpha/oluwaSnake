import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Services/>} path="/services"/>
      <Route element={<About/>} path="/about"/>
      <Route element={<Contact/>} path="/contact"/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
