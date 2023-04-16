import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
  
        if (scrollTop > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <div>

<nav className={`navbar navbar-expand-md shadow fixed-top ${scrolled ? 'scrolled' : ''}`}>
  <div class="container-fluid">
    <a class="navbar-brand ms-3 fs-4" href="#"><span className='text-danger'>Real</span><span>State</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item m-3">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link" href="#">Properties</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link" href="#">About Us</a>
        </li>
      </ul>

      <a className='text-decoration-none pt-2 pb-2 ps-3 pe-3 bg-info text-white rounded me-3' href="/">Contact Us</a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
