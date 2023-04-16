import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid mx-auto p-0 m-0 mt-5'>

    <footer class="footer d-flex flex-wrap justify-content-between align-items-center border-top row m-0 p-0">

        <div class="col-md-4 d-flex align-items-center justify-content-center mt-5 mb-5">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <i class="bi bi-house-door fs-3 ms-4"></i>
        </a>
        <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>

        <div class="col-md-4 d-flex align-items-center justify-content-center mt-5 mb-5">
        <ul class="nav justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-facebook"></i></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-instagram"></i></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-youtube me-4"></i></a></li>
        </ul>
        </div>
    </footer>

    </div>
  )
}

export default Footer