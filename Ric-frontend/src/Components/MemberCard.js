import React from 'react'
import facebook from "../Assets/Image/facebook.svg"
import linkedin from "../Assets/Image/linkedin.svg"

const MemberCard = (props) => {
  
  return (
    <div className='m-2'>
      <div className="card text-center d-flex mx-auto m-3 border border-3 border-primary p-2" style={{ width: '20rem', height:"82vh" }}>
        <img src={!props.image ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR1VLcPa0aFfNClulnJQOD2GR9Nxw-3AEFvSg9ss&s" : props.image} className="card-img-top img-thumbnail border border-2 border-info rounded-circle p-2" style={{margin:'auto', height: '35vh', width: "35vh", boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.42) 0px 15px 12px'}} alt="..." />
        <div className="card-body mx-auto">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text fs-6 fw-bold">{!props.expertise ? "Currently No Data Available" : props.expertise}</p>
          <p className="card-text fw-bold">{!props.year ? "Currently No Data Available" : props.year} Year</p>
          <p className="card-text fw-bold">{!props.dept ? "Currently No Data Available" : props.dept}</p>

            <a href={props.facebook} className="btn btn-light rounded-circle mx-3">
              <img src={facebook}  style={{ height: '25px', width: '25px' }} alt="FB-icon" />
            </a>
            <a href={props.linkedin} className="btn btn-light mx-3">
              <img src={linkedin}  style={{ height: '27px', width: '27px' }} alt="linkedin-icon" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
