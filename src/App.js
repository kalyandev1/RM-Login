import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./signup/SignUp";
import LandingPage from "./comp/LandingPage";
import Verify from "./signup/Verify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Verify />}></Route>
          <Route path="/sign" element={<SignUp />}></Route>
          <Route path="/home" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
