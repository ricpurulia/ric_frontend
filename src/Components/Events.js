import React, { useState, useEffect } from "react";
import axios from "../axios";
import logo from "../Assets/Image/logo.png";
import "../Assets/Css/EventsHome.css";
import Loading from "./Loading";
function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fatchData() {
    setLoading(true);
    const req = await axios.get("/allevent");
    setEvents(req.data.data.event);
    setLoading(false);
  }
  useEffect(() => {
    fatchData(); // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Upcoming Event */}
      <div className="text-center font-800 my-2 mt-10" data-aos="zoom-in">
        <h1 className="fw-bold fs-1 mb-3">Upcoming Event</h1>
      </div>

      {!loading ? (
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {events.map((event, index) => {
              return (
                <div
                  key={event._id}
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <div className="d-flex m-auto bg">
                    <img src={logo} alt=".." />{" "}
                    <div className="d-">
                      <div className="heading">{event.name}</div>
                      <div className="vanue px-5" data-aos="zoom-in">
                        ECE Seminer Hall
                      </div>
                      <div className="date text-end" data-aos="fade-right">
                        at {event.startDate} of May 2023
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <Loading />
      )}



      {/* Past Event */}
      <div className="text-center font-800 my-2 mt-10" data-aos="zoom-in">
        <h1 className="fw-bold fs-1 mb-3">Upcoming Event</h1>
      </div>

      {!loading ? (
        <div
          id="carouselExampleControls2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {events.map((event, index) => {
              return (
                <div
                  key={event._id}
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <div className="d-flex m-auto bg">
                    <img src={logo} alt=".." />{" "}
                    <div className="d-">
                      <div className="heading">{event.name}</div>
                      <div className="vanue px-5" data-aos="zoom-in">
                        ECE Seminer Hall
                      </div>
                      <div className="date text-end" data-aos="fade-right">
                        at {event.startDate} of May 2023
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Events;
