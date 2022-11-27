import React from "react";

import BuyNow from "./components/BuyNow"
import Header from "./components/Header"

import "./App.css"
import Footer from "./components/Footer";

// import Api from "./components/Api";
// import Apitext from "./components/Apitext";


function App() {
  return (
    <div className= "App">
      <Header />
      <BuyNow />
      <Footer />
    {/* <Apitext />
    <Api /> */}
    </div>
  );
}

export default App;
