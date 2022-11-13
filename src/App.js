import React from "react";
import * as ReactRouter from 'react-router-dom';

import "./App.css"

import Api from "./components/Api";
import Apitext from "./components/Apitext";


function App() {
  return (
    <div className= "App">
    <Apitext />
    <Api />
    </div>
  );
}

export default App;
