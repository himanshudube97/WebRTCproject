import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navigation } from "./components/shared/Navigation/Navigation";
import { Authenticate } from "./pages/Authenticate/Authenticate";
import { Activate } from "./pages/Activate/Activate";
import { Rooms } from "./pages/Rooms/Rooms";

interface SpecialRoutes {
  authenticated: boolean;
  children: any;
}

const user = {
  activated: false,
};

const isAuth = false; //logged in condition;
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <GuestRoute authenticated={isAuth}>
                <Home />
              </GuestRoute>
            }
          />
          <Route
            path="/authenticate"
            element={
              <GuestRoute authenticated={isAuth}>
                <Authenticate />
              </GuestRoute>
            }
          />
          <Route
            path="/activate"
            element={
              <SemiProtectedRoute authenticated={isAuth}>
                <Activate />
              </SemiProtectedRoute>
            }
          />
          <Route
            path="/rooms"
            element={
              <ProtectedRoute authenticated={isAuth}>
                <Rooms />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GuestRoute = ({ authenticated, children }: SpecialRoutes) => {
  return authenticated ? <Navigate to="/rooms" /> : children;
};
export default App;

const SemiProtectedRoute = ({ authenticated, children }: SpecialRoutes) => {
  return !authenticated ? (
    <Navigate to="/" />
  ) : authenticated && user.activated ? (
    <Navigate to="/rooms" />
  ) : (
    children
  );
};

const ProtectedRoute = ({ authenticated, children }: SpecialRoutes) => {
  return !authenticated ? (
    <Navigate to="/" />
  ) : authenticated && !user.activated ? (
    <Navigate to="/activate" />
  ) : (
    children
  );
};

/**
 * Guest Route has 3 sections , Home, authenticate using phone/email and otp
 * so basically non logged in users can see this, logged in cannot see this.
 *
 *
 */
