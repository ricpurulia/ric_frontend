import React,{useState,useEffect} from "react";
import axios from "../axios";
import logo from "../Assets/Image/logo.png";
import '../Assets/Css/EventsHome.css'
function Events() {
  const [events, setEvents] = useState([]);

  async function fatchData() {
    const req = await axios.get("/getAllEvent");
    setEvents( req.data.data.event);
  
  }
  useEffect(() => {
    fatchData();// eslint-disable-next-line 
  }, []);

  return (
    <div>
      <div className="text-center font-800 my-2 mt-10" data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Upcoming Event</h1>
      </div>





      <div className=" carousel-inner  d-flex lg:justify-content-center overflow-auto">
      {events.map((evt)=>{
          return(
            <a href={'/event/'+evt.id}>
        <div className="carousel-item  bg d-flex">
          <div className=" img d-flex">
            <img src={logo} alt="" />
          </div>
          <div className="" >
            <div className="heading px-3">
              {evt.name}
            </div>
            <div className="vanue px-5">

              ECE Seminer Hall

            </div>
            <div className="date text-end">
              at {evt.startDate} of May 2023
            </div>
          </div>
        </div>
        </a>
)
})}
      </div>

  
      


        
      {/* <div className="d-flex w-25 flex-row m-5 border rounded">
        <div className="p-1 text-center align-item-center  ">
          <img src={logo} alt="logo" style={{height:"60px"}}/>
        </div>
        <div className="pt-1 justify-content-center  ">
         <h5>Christ Mas</h5>
         <p className="fo lh-1 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, architecto!</p>
        </div>
      </div> */}



      <div className="text-center font-800 mt-5" data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Past Event</h1>
      </div>
      <div className=" carousel-inner  d-flex lg:justify-content-center overflow-auto">
      {events.map((evt)=>{
          return(
            <a href={'/event/'+evt.id}>
        <div className="carousel-item  bg d-flex">
          <div className=" img d-flex">
            <img src={logo} alt="" />
          </div>
          <div className="" >
            <div className="heading px-3">
              {evt.name}
            </div>
            <div className="vanue px-5">

              ECE Seminer Hall

            </div>
            <div className="date text-end">
              at {evt.startDate} of May 2023
            </div>
          </div>
        </div>
        </a>
)
})}
      </div>
    </div>
  );
}

export default Events;
