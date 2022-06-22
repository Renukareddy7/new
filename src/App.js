
import React from "react";
import Landing from "./component/Landing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";

import SignUp from './component/SignUp';






function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
