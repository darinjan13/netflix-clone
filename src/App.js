import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Regform from "./Pages/Regform";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {

  return (
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/signup/regform" element={ <Regform />} />
          <Route exact path="/signin" element={ <Signin /> } />
          <Route exact path="/home" element={ <Home /> } >
            
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
  );
}

export default App;
