import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer_";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Plant from "./Components/Plants/Plant";
import Home from "./Components/Pages/Home";
import Signup from "./Components/Forms/Signup";
import Login from "./Components/Forms/Login";
import PrivateComp from "./Components/Forms/PrivateComp";
import Plantdetails from "./Components/Plants/Plantdetails";
import Cart from "./Components/Plants/Cart";
import Cartclear from "./Components/Pieces/Cartclear";
import Errorpage from "./Components/Pages/Errorpage";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/plants" element={<Plant />} />
          <Route element={<PrivateComp/>}>


          <Route path="/contact" element={<Contact/>} />
          <Route path="/plants/product" element={<Plantdetails />} />
          <Route path="/plants/cart" element={<Cart />} />
          <Route path="/orderplaced" element={<Cartclear />} />
          </Route>


          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
