import React, { useEffect, useState } from 'react'
import vegitable from '../../assets/vegitable.jpg'
import offers from '../../api/offers'

const Offer = () =>
{
  const [ offer, setOffer ] = useState([])
  useEffect( () =>
  {
    const fetchOffer = async () =>
    {
      try {
      const response = await offers.get( '/db/offer.json' );
      const result = response.data;
      setOffer(result)
    } catch (error) {
      console.log
    }
    }
    fetchOffer()
  },[])
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
                <div className="card-title">{ item.title }</div>
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