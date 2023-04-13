import React,{useState,useEffect} from "react";
// import logo from "../Assets/Image/logo.png";
import axios from "../axios";
import EventCard from './EventCard'
import "../Assets/Css/Events.css"
import Loading from "./Loading";

const Events = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false)

  async function fatchData() {
    setLoading(true)
    const req = await axios.get("/allevent");
    setEvents( req.data.data.event);
    setLoading(false)
  
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
        <div className="d-flex flex-row flex-wrap justify-content-evenly">
          {/* <EventBar/> */}

          {!loading? events.map((evt)=>{
          return(

            <EventCard key={evt._id} id={evt._id} name={evt.name} topic={evt.topic}/>
 
          )
        }): <Loading/>}

        
   
        </div>
      </div>
    </section>

    {/* past event */}
    <section className="past-event">
      <div className="text-center font-800 " data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Past Event</h1>
      </div>
      <div className="container text-center mt-3 ">
        <div className="d-flex flex-row flex-wrap justify-content-evenly">
        {!loading? events.map((evt)=>{
          return(

            <EventCard key={evt._id} id={evt._id} name={evt.name} topic={evt.topic}/>
 
          )
        }):<Loading/>}
        </div>
      </div>
    </section></div>
  )
}

export default Events