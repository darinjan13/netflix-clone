import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Regform from "./pages/Regform";
import Signin from "./pages/Signin";
import Trending from './pages/Trending';
import NewRelease from './pages/NewRelease';

import NotFound from "./pages/NotFound";

function App() {

  return (
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/signup/regform" element={ <Regform />} />
          <Route exact path="/signin" element={ <Signin /> } />
          <Route exact path="/trending" element={ <Trending /> } />
          <Route exact path="/newrelease" element={ <NewRelease /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
  );
}

export default App;
