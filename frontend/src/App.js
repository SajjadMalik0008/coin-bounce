import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Protected from "./Components/Protected/Protected";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/signup";
import Crypto from "./pages/Crypto/crypto";
import { useSelector } from "react-redux";

// 3345848
function App() {
  const isAuth = useSelector((state) => state.userSlice.auth);
  return (
    <div className="container">
      <BrowserRouter>
        <div className="layout">
          <NavBar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className="main">
                  <Home />
                </div>
              }
            />
            <Route
              path="crypto"
              exact
              element={<div className="main"><Crypto/></div>}
            />

            <Route
              path="blogs"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className="main">Crypto page</div>
                </Protected>
              }
            />
            <Route
              path="submit"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className="main">Submit page</div>
                </Protected>
              }
            />
            <Route
              path="login"
              exact
              element={<div className="main"><Login/></div>}
            />
            <Route
              path="signup"
              exact
              element={<div className="main"><Signup/></div>}
            />
            <Route
            path="*"
            element={<div className="main"> <Error/></div>}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
