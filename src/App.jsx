import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./Components/0-Main/Main";
import Signin from "./Components/Signin/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Signin />} />
          <Route path="/login" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
