import React from 'react';
import DefultImage from '../Assets/Image/defult-image.jpg';


const EventCard = (prpos) => {
  return (
    <div>
       <div className="card m-4" data-aos="fade-up"  style={{width:" 18rem"}}>
            <img src={DefultImage} className="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">{prpos.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    </div>
  )
}

export default EventCard
