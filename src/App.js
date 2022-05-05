import React from 'react';
import { Routes, Route } from "react-router-dom";

// import HomePage from "./pages/HomePage.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Trending from './pages/Trending.jsx';
import NewRelease from './pages/NewRelease.jsx';
import ContinueWatching from './pages/ContinueWatching.jsx';

import ProtectedRoutes from './Components/ProtectedRoutes.jsx'
import NotFound from "./pages/NotFound.jsx";
import { UserAuthContextProvider } from './context/UserAuthContext.js';

function App() {

  return (
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/" element={ <Signin /> } />
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
