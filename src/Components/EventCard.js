import React from "react";
import DefultImage from "../Assets/Image/defult-image.jpg";
import { useNavigate } from "react-router-dom";

const EventCard = (props) => {
  let navigate = useNavigate()
  return (
    <div onClick={()=>{navigate("/event/"+props.id)}} className="card" style={{width: "18rem"}}>
        <img src={DefultImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-2 fw-bold">{props.name}</h5>
          <h6 className="card-title ">{props.topic}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
  );
};

export default EventCard;
