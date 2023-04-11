import React from "react";
import DefultImage from "../Assets/Image/defult-image.jpg";

const ProjectCard = (props) => {
  return (
    <div className="project-body mx-auto mb-4" >
      <img
        className="project-image shado-lg rounded"
        src={DefultImage} data-aos="zoom-in" 
        alt="this is "
      />
      <div className="project-text border  shadow bg-white text-center  position-relative " data-aos="fade-up"data-aos-duration="2000">
        <div className="fs-2 fw-semibold mb-1">{props.name}</div>
        <div className="fs-4 mb-1">Theme</div>
        <div>
          {props.dsc}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
