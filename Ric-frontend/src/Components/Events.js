import React from "react";
import logo from "../Assets/Image/logo.png";

function Events() {
  

  return (
    <div>
      <div className="text-center font-800 my-2 mt-10" data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Upcoming Event</h1>
      </div>
      <div className="d-flex w-25 flex-row m-5 border rounded">
        <div className="p-1 text-center align-item-center  ">
          <img src={logo} alt="logo" style={{height:"60px"}}/>
        </div>
        <div className="pt-1 justify-content-center  ">
         <h5>Christ Mas</h5>
         <p className="fo lh-1 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, architecto!</p>
        </div>
      </div>
      <div className="text-center font-800 mt-5" data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Past Event</h1>
      </div>
    </div>
  );
}

export default Events;
