import React from 'react'
import whyPhoto from '../assets/whyphoto.jpg'

const Why = () => {
  return (
    <div className='container-fluid d-flex justify-content-center mt-5 mb-5'>

        <div className='row'>

        <div className='container-fluid col-sm-6 d-flex justify-content-center'>
            <img className='why-photo' src={whyPhoto} alt="realstate photo"/>
        </div>

        <div className='col-sm-6 container-fluid mt-2'>
            <div className='container-fluid d-flex justify-content-center'>
            <h1 className='text-success'>Why Choose Us?</h1>
            </div>

            <div className='mt-3 container-fluid d-flex justify-content-center'>
                <h5>
                 <span className='me-3'><i class="bi bi-award-fill"></i></span>
                 World Class Properties
                </h5>
            </div>

            <div className='mt-3 container-fluid d-flex justify-content-center'>
                <h5>
                 <span className='me-3'><i class="bi bi-piggy-bank-fill"></i></span>
                 Affordable
                </h5>
            </div>

            <div className='mt-3 container-fluid d-flex justify-content-center'>
                <h5>
                 <span className='me-3'><i class="bi bi-house-heart-fill"></i></span>
                 Amenities
                </h5>
            </div>

            <div className='mt-3 container-fluid d-flex justify-content-center'>
                <h5>
                 <span className='me-3'><i class="bi bi-patch-check-fill"></i></span>
                 Trusted
                </h5>
            </div>
            
        </div>

        </div>



    </div>
  )
}

export default Why