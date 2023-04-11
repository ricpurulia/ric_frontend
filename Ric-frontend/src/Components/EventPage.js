import React,{useState,useEffect} from "react";
// import logo from "../Assets/Image/logo.png";
import axios from "../axios";
import EventCard from './EventCard'
import "../Assets/Css/Events.css"

const Events = () => {

  const [events, setEvents] = useState([]);

  async function fatchData() {
    const req = await axios.get("/getAllEvent");
    setEvents( req.data.data.event);
  
  }
  useEffect(() => {
    fatchData();// eslint-disable-next-line 
  }, []);
    
  return (
    <div className="mt-1"> {/* Upcoming event */}
    <section className="upcoming-event">
      <div className="text-center font-800 my-2 mt-10"  data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Upcoming Event</h1>
      </div>
      <div className="container text-center mt-3 ">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {/* <EventBar/> */}

          {events.map((evt)=>{
          return(

            <EventCard id={evt._id} name={evt.name} topic={evt.topic}/>
 
          )
        })}

        
   
        </div>
      </div>
    </section>

    {/* past event */}
    <section className="past-event">
      <div className="text-center font-800 " data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Past Event</h1>
      </div>
      <div className="container text-center mt-3 ">
        <div className="d-flex flex-row flex-wrap justify-content-center">
        {events.map((evt)=>{
          return(

            <EventCard name={evt.name} topic={evt.topic}/>
 
          )
        })}
        </div>
      </div>
    </section></div>
  )
}

export default Events