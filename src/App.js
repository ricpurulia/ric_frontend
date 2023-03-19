import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Members from "./Components/Members";
import Event from "./Components/EventPage";
// import ProjectPage from './Components/ProjectPage'
function App() {
  
  return (
    <Router>
      
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/projects" element={<Projects/>}/>
      <Route exact path="/members" element={<Members/>}/>
      <Route exact path="/event" element={<Event/>}/>
      {/* <ProjectPage/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
