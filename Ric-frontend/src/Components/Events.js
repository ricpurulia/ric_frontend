import React from 'react'
import EventCard from './EventCard'

const Events = () => {
    
  return (
    <div> {/* Upcoming event */}
    <section className="upcoming-event">
      <div className="text-center font-800 my-2" data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Upcoming Event</h1>
      </div>
      <div className="container text-center mt-3 ">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
   
        </div>
      </div>
    </section>

    {/* past event */}
    <section className="past-event">
      <div className="text-center font-800 mt-5" data-aos="zoom-in">
        <h1 className="fw-bold fs-1">Past Event</h1>
      </div>
      <div className="container text-center mt-3 ">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section></div>
  )
}

export default Events