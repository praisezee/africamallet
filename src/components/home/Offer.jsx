import React, { useEffect, useState } from 'react'
import myOffer from '../../api/offer'

const Offer = () =>
{
  const [ offer, setOffer ] = useState(myOffer)
  return (
    <div className='mt-5'>
      <p className="text-center text-uppercase mx-auto h1 my-5">
        What we have to offer
        <hr className="mx-auto opacity-1 text-white w-50" />
      </p>
      { offer.map( item => (
        <div className="my-2 card bg-dark">
          <div className="row g-0">
            <div className="col-md-4 my-auto">
              <img src={item.src} alt=""   className='img-fluid rounded'/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title mx-auto h2 text-uppercase text-center">{ item.title }</div>
                <hr className="mx-auto opacity-1 text-white w-25" />
                <div className="card-text">{ item.text }</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Offer