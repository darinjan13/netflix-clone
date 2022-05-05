import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import Signin from "./Pages/Signin.jsx";
import Signup from "./Pages/Signup.jsx";
import Trending from './Pages/Trending.jsx';
import NewRelease from './Pages/NewRelease.jsx';
import ContinueWatching from './Pages/ContinueWatching.jsx';

import ProtectedRoutes from './Components/ProtectedRoutes.jsx'
import NotFound from "./Pages/NotFound.jsx";
import { UserAuthContextProvider } from './context/UserAuthContext.js';

function App() {

  return (
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/signin" element={ <Signin /> } />
            <Route exact path="/signup" element={ <Signup /> } />
            <Route exact path="/trending" element={
              <ProtectedRoutes>
                <Trending /> 
              </ProtectedRoutes>
            } />
            <Route exact path="/newrelease" element={
              <ProtectedRoutes>
                <NewRelease />
              </ProtectedRoutes>
            } />
            <Route exact path="/continuewatching" element={
              <ProtectedRoutes>
                <ContinueWatching />
              </ProtectedRoutes> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </UserAuthContextProvider>
  );
}

export default App;
