import React, { useState, useEffect } from "react";
import "../Assets/Css/Projects.css";
import MemberCard from "../Components/MemberCard";
import axios from "../axios";

const Projects = () => {
  const toggleCat = (currCat) => {
    document.getElementById("currCat").innerText = currCat;
  };
  let members = {};

  const [faculty, setFaculty] = useState([]);
  const [convener, setConvener] = useState([]);
  const [core, setCore] = useState([]);
  const [general, setGeneral] = useState([]);

  // let core = {};
  // let general = {};

  async function fatchData() {
    const req = await axios.get("/api/users");
    members = req.data.data.users;
    // console.log(members);

    let temp = members.filter((mem) => {
      return mem.pos === "Core";
    });
    setCore(core.concat(temp));

    temp = members.filter((mem) => {
      return mem.pos === "faculty";
    })
    setFaculty(faculty.concat(temp));

    temp = members.filter((mem) => {
      return mem.pos === "Convenor";
    })
    setConvener(convener.concat(temp));

    temp = members.filter((mem) => {
      return mem.pos === "General";
    });
    setGeneral(general.concat(temp));
  }
  useEffect(() => {
    fatchData();// eslint-disable-next-line 
  }, []);
  return (
    <>
      {/* Faculty Advisor Section */}
      <div className="text-center fs-1" data-aos="zoom-in">
        <h1 id="core-members">Faculty Advisor</h1>
      </div>
      <div className="porjectCards d-flex flex-wrap justify-content-center m-5">
        {faculty.map((mem) => {
          return (
            <MemberCard
              name={mem.name}
              image={mem.Image}
              key={mem._id}
            />
          );
        })}
      </div>
      <div className="text-center fs-1" data-aos="zoom-in">
        <h1 id="core-members">Student Convener</h1>
      </div>
      {/* Convener Section */}
      <div className="porjectCards d-flex flex-wrap justify-content-center m-5">
        {convener.map((mem) => {
          return (
            <MemberCard
              name={mem.name}
              image={mem.Image}
              facebook={mem.fbUrl}
              linkedin={mem.liUrl}
              expertise={mem.cat}
              year={mem.year}
              dept={mem.dept}
              key={mem._id}
            />
          );
        })}
      </div>
      <div className="text-center fs-1" data-aos="zoom-in">
        <h1 id="core-members">Core Members</h1>
      </div>

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
            Core Members
          </span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a
              className="dropdown-item"
              href="#core-members"
              onClick={() => {
                toggleCat("Core Members");
              }}
            >
              Core Members
            </a>
            <li></li>
            <a
              className="dropdown-item"
              href="#general-members"
              onClick={() => {
                toggleCat("General Members");
              }}
            >
              General Members
            </a>
          </li>
        </ul>
      </div>

      {/* Project card */}
      <div className="porjectCards d-flex flex-wrap justify-content-center m-5">
        {/* {core.map((mem) => {
          return <MemberCard name={mem.name} />;
        })} */}
        {core.map((mem) => {
          return (
            <MemberCard
              name={mem.name}
              image={mem.Image}
              facebook={mem.fbUrl}
              linkedin={mem.liUrl}
              expertise={mem.cat}
              year={mem.year}
              dept={mem.dept}
              key={mem._id}
            />
          );
        })}
      </div>

      {/* Genreal project */}
      <div className="text-center fs-1 mt-5" data-aos="zoom-in">
        <h1 id="general-members">General Members</h1>
      </div>

      {/* Project card */}
      <div className="porjectCards d-flex flex-wrap justify-content-center m-5">
        {general.map((mem) => {
          return (
            <MemberCard
              name={mem.name}
              image={mem.Image}
              facebook={mem.fbUrl}
              linkedin={mem.liUrl}
              expertise={mem.cat}
              year={mem.year}
              dept={mem.dept}
              key={mem._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
