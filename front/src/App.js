import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Student/>} />
        <Route exact path="/add-student" element={<AddStudent/>} />
      </Routes>
    </Router>
  );
}

export default App;
