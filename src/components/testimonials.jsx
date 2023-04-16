import React from 'react'
import Profile from '../assets/profile.jpg'

const Testimonials = () => {
  return (
    <div className='container-fluid row d-flex justify-content-center m-0 p-0 pb-3 mt-3 row'>

        <hr className='w-50' />

        <center><h3 className='mb-2'>Testimonials</h3></center>

        <div class="testimonial-card card shadow col-sm-4 m-2">
        <div class="card-body container-fluid mx-auto p-0 m-0 row">

        <div className='col-8 mt-2 d-flex align-items-center'>
           <p className='testimonial-name mt-4 text-success text-bold'>Juan Dela Cruz</p> 
        </div>

        <div className='col-4 d-flex justify-content-end align-items-center mt-2'>
            <img className='profile-photo' src={Profile} alt="profile photo" />
        </div>

        <div className='col-12 d-flex justify-content-end align-items-center mt-2'>
            <p className='testimonial-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
        </div>

        <div className='col-12 d-flex justify-content-center align-items-center mt-2'>
            <p> 
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            </p>
        </div>

        </div>
        </div>



        <div class="testimonial-card card shadow col-sm-4 m-2">
        <div class="card-body container-fluid mx-auto p-0 m-0 row">

        <div className='col-8 mt-2 d-flex align-items-center'>
           <p className='testimonial-name mt-4 text-success text-bold'>Juan Dela Cruz</p> 
        </div>

        <div className='col-4 d-flex justify-content-end align-items-center mt-2'>
            <img className='profile-photo' src={Profile} alt="profile photo" />
        </div>

        <div className='col-12 d-flex justify-content-end align-items-center mt-2'>
            <p className='testimonial-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
        </div>

        <div className='col-12 d-flex justify-content-center align-items-center mt-2'>
            <p> 
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            </p>
        </div>

        </div>
        </div>




        <div class="testimonial-card card shadow col-sm-4 m-2">
        <div class="card-body container-fluid mx-auto p-0 m-0 row">

        <div className='col-8 mt-2 d-flex align-items-center'>
           <p className='testimonial-name mt-4 text-success text-bold'>Juan Dela Cruz</p> 
        </div>

        <div className='col-4 d-flex justify-content-end align-items-center mt-2'>
            <img className='profile-photo' src={Profile} alt="profile photo" />
        </div>

        <div className='col-12 d-flex justify-content-end align-items-center mt-2'>
            <p className='testimonial-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
        </div>

        <div className='col-12 d-flex justify-content-center align-items-center mt-2'>
            <p> 
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            <i class="bi bi-star-fill text-warning m-1"></i>
            </p>
        </div>

        </div>
        </div>

    </div>
  )
}

export default Testimonials