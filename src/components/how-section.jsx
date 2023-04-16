import React from 'react'

const Howsection = () => {
  return (
    <div className='howsec container-fluid d-flex justify-content-around row mb-3'>

        <hr className='w-50' />

        <div className='col-12'>
            <center><h3>How it works?</h3></center>
        </div>

        <div className='card col-sm-4 mt-3 ms-3'>
            <div className='card-body'>

                <h4 className='text-center card-title fs-1 text-danger'><i class="bi bi-geo-alt-fill"></i></h4>
                <h6 className='text-center text-muted'>Find Location</h6>
                <p className='text-center'>Our properties are located at prime areas where by there won’t be problem with transportation</p>

            </div>
        </div>

        <div className='card col-sm-4 mt-3 ms-3'>
            <div className='card-body'>

                <h4 className='text-center card-title fs-1 text-dark'><i class="bi bi-credit-card-fill"></i></h4>
                <h6 className='text-center text-muted'>Make Payment</h6>
                <p className='text-center'>Our estates comes with good network,portable water , 24hrs light and round the clock security.</p>

            </div>
        </div>


        <div className='card col-sm-4 mt-3 ms-3'>
            <div className='card-body'>

                <h4 className='text-center card-title fs-1 text-success'><i class="bi bi-clipboard-check-fill"></i></h4>
                <h6 className='text-center text-muted'>Sign Contract</h6>
                <p className='text-center'>We have been in business for over 32 years,for client outside the country you can trust  us to deliver well.</p>

            </div>
        </div>

    </div>
  )
}

export default Howsection