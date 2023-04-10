import React from "react";
import './App.css';
import PageRoutes from "./components/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
