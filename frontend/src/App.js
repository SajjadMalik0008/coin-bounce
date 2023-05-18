import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className={"layout"}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={"main"}>
                  <Home/>
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
