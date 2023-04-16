import React from 'react'
import Feature1 from '../assets/feature1.jpg'

const Featured = () => {
  return (
    <div className='container-fluid row d-flex justify-content-center m-0 p-0 pb-3'>

        <hr className='w-50' />

        <div className='container-fluid col-12 '>
        <center><h3>Featured Properties</h3></center>
        </div>

        <div className='feature-card col-sm-4 mt-3 mb-3 '>
        <div class="card shadow">
        <img className='featured-photo' src={Feature1} alt="realstate house" />
        <div class="card-body container-fluid row">

          <div>
          <h6 class="card-title">Property 1</h6>
          <p class="property-loc card-text"><span className='me-2'><i class="bi bi-geo-alt-fill"></i></span> <span>California, USA</span></p>
          <p className='text-danger'>$50,000</p>
          </div>

        </div>
        </div>
        </div>

        <div className='feature-card col-sm-4 mt-3 mb-3'>
        <div class="card shadow">
        <img className='featured-photo' src={Feature1} alt="realstate house" />
        <div class="card-body container-fluid row">

          <div>
          <h6 class="card-title">Property 1</h6>
          <p class="property-loc card-text"><span className='me-2'><i class="bi bi-geo-alt-fill"></i></span> <span>California, USA</span></p>
          <p className='text-danger'>$50,000</p>
          </div>

        </div>
        </div>
        </div>

        <div className='feature-card col-sm-4 mt-3 mb-3'>
        <div class="card shadow">
        <img className='featured-photo' src={Feature1} alt="realstate house" />
        <div class="card-body container-fluid row">

          <div>
          <h6 class="card-title">Property 1</h6>
          <p class="property-loc card-text"><span className='me-2'><i class="bi bi-geo-alt-fill"></i></span> <span>California, USA</span></p>
          <p className='text-danger'>$50,000</p>
          </div>

        </div>
        </div>
        </div>

        <div className='col-12 mt-3'>
          <center><a href="#" className='p-2 bg-dark text-decoration-none text-white rounded'>View More</a></center>
        </div>

    </div>
  )
}

export default Featured