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
import Projects from "./Components/ProjectPage";
import Members from "./Components/Members";
import Events from "./Components/EventPage";
import EventId from "./Components/[EventId]";
import ProjectId from "./Components/[ProjectId]";
// import ProjectPage from './Components/ProjectPage'
function App() {
  
  return (
    <Router>
      
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/events" element={<Events/>}/>
      <Route exact path="/projects" element={<Projects/>}/>
      <Route exact path="/members" element={<Members/>}/>
      <Route exact path="/event/:id" element={<EventId/>}/>
      <Route exact path="/project/:id" element={<ProjectId/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
