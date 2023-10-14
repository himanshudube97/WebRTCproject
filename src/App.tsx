import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navigation } from "./components/shared/Navigation/Navigation";
import { Authenticate } from "./pages/Authenticate/Authenticate";
import { Activate } from "./pages/Activate/Activate";
import { Rooms } from "./pages/Rooms/Rooms";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
interface SpecialRoutes {

  children: any;
}



function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <GuestRoute >
                <Home />
              </GuestRoute>
            }
          />
          <Route
            path="/authenticate"
            element={
              <GuestRoute >
                <Authenticate />
              </GuestRoute>
            }
          />
          <Route
            path="/activate"
            element={
              <SemiProtectedRoute >
                <Activate />
              </SemiProtectedRoute>
            }
          />
          <Route
            path="/rooms"
            element={
              <ProtectedRoute>
                <Rooms />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GuestRoute = ({children }: SpecialRoutes) => {
const {isAuth} = useSelector((state:any) => state.auth);
  return isAuth ? <Navigate to="/rooms" /> : children;
};
export default App;

const SemiProtectedRoute = ({children }: SpecialRoutes) => {
  const {isAuth, user} = useSelector((state:any) => state.auth);

  return !isAuth ? (
    <Navigate to="/" />
  ) : isAuth && user.isActivated ? (
    <Navigate to="/rooms" />
  ) : (
    children
  );
};

const ProtectedRoute = ({ children }: SpecialRoutes) => {
  const {isAuth, user} = useSelector((state:any) => state.auth);

  return !isAuth ? (
    <Navigate to="/" />
  ) : isAuth && !user.isActivated ? (
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
