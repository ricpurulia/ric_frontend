import React,{useEffect,useState} from "react";
import "../Assets/Css/Projects.css";
import ProjectCard from "./ProjectCard";
import axios from "../axios";
import Loading from "./Loading";
const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  
  const toggleCat = (currCat) => {
    document.getElementById("currCat").innerText = currCat;
  };

  async function fatchData() {
    setLoading(true)
    const req = await axios.get("/allproject");
    setProjects( req.data.data.project);
    setLoading(false)

}
useEffect(() => {
  fatchData();// eslint-disable-next-line 
}, []);

  return (
    <>

      {/* toggle button */}
      <div
        id="toggleBtn"
        className="btn-group position-fixed fw-bold top-0 end-0"
      >
        <button
          style={{ backgroundColor: "#6462d8" }}
          type="button"
          className="btn btn-secondary dropdown-toggle "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span id="currCat" className="text-white">
            Special Project
          </span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <ul>
            <a
              className="dropdown-item"
              href="#special-project"
              onClick={() => {
                toggleCat("Special Project");
              }}
            >
              Special Projects
            </a>
            <li></li>
            <a
              className="dropdown-item"
              href="#general-project"
              onClick={() => {
                toggleCat("General Project");
              }}
            >
              General Project
            </a>
          </ul>
        </ul>
      </div>

      {/* speacial project */}

      <div className="text-center fs-1" data-aos="zoom-in">
        <h1 id="special-project">Special Project</h1>
      </div>

      {/* Project card */}
      <div className="porjectCards d-flex flex-wrap justify-content-center m-5">
        {!loading ? projects.map((pjt)=>{
          return(

            <ProjectCard key={pjt._id} id={pjt._id} name={pjt.name} dsc={pjt.description}  />
          )
        }): <Loading/>}


      </div>

      {/* Genreal project */}
      <div className="text-center fs-1 mt-5" data-aos="zoom-in">
        <h1 id="general-project">General Project</h1>
      </div>

      {/* Project card */}
      <div className="porjectCards d-flex flex-wrap justify-content-center m-5">
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </>
  );
};

export default Projects;
