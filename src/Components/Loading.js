import React from 'react'
import loading from '../Assets/Image/loading.gif'

const Loading = () => {
  return (
    <div className='m-auto d-flex justify-content-evenly'>
        <img style={{width: "150px"}} src={loading} alt="loading" />
    </div>
  )
}

export default Loading