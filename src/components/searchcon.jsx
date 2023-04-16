import React from 'react'

const Searchcon = () => {
  return (
    <div className='search-con container-fluid d-flex justify-content-center'>

        <div className='search rounded shadow bg-light mb-5 row ms-3 me-3'>

            <div className='col-sm-3 d-flex justify-content-center mb-2'>
            <select className='location ms-4 me-4 bg-light' name="location" id="location">
                <option value="" disabled selected>Select Location</option>
                <option value="City 1">City 1</option>
                <option value="City 2">City 2</option>
                <option value="City 3">City 3</option>
            </select>
            </div>

            <div className='col-sm-3 d-flex justify-content-center mb-2'>
            <select className='property-type ms-4 me-4 bg-light' name="property-type" id="property-type">
                <option value="" disabled selected>Property Type</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
            </div>

            <div className='col-sm-3 d-flex justify-content-center mb-2'>
            <select className='budget ms-4 me-4 bg-light' name="budget" id="budget">
                <option value="" disabled selected>What's your budget?</option>
                <option value="Range 1">Range 1</option>
                <option value="Range 2">Range 2</option>
                <option value="Range 3">Range 3</option>
            </select>
            </div>

            <div className='col-sm-3 d-flex justify-content-center mt-1'>
                <button className='btn btn-md btn-info rounded text-white'>Search</button>
            </div>




        </div>

    </div>
  )
}

export default Searchcon