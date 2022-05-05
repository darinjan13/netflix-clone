import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Trending from './pages/Trending';
import NewRelease from './pages/NewRelease';
import ContinueWatching from './pages/ContinueWatching'

import ProtectedRoutes from './Components/ProtectedRoutes'
import NotFound from "./pages/NotFound";
import { UserAuthContextProvider } from './context/UserAuthContext';

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
