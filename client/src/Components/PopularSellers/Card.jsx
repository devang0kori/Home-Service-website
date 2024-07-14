// Card.js

import React from 'react';
import { Link } from 'react-router-dom';
import Rati from '../../assets/Rati.png';
import '../PopularSellers/Card.css';

const Card = ({ image, service, rating, price, city, landmark, address }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 sm:w-64 ">
      <img src={image} alt={service} className='sm:h-48 h-36 w-full object-cover object-center' />
      <div className='sm:p-4 px-1 py-1 border-t-4 border-blue-500'>
        <div className="flex flex-row  items-center justify-between  mb-2">
          <div className='flex items-center sm:w-10/12 w-full'>
            <img src={image} alt={service} className='sm:h-8 sm:w-8 h-6 w-6 rounded-full object-cover' />
            {/* <span className='sm:ml-2 font-medium sm:text-base text-xs'>{service}</span> */}
            <span className='sm:ml-2 font-medium sm:text-base text-xs'>Demo</span>
          </div>
          <div className='flex items-center sm:w-1/4 w-full sm:mr-0 '>
            <img className='sm:h-5 sm:w-5 w-4 h-4 mr-1' src={Rati} alt="rating" />
            <span className="sm:text-sm text-xs">{rating} (5.0)</span>
          </div>
        </div>

        <h3 className="sm:text-lg text-sm font-bold text-center mb-2 sm:w-9/12 w-full  mx-auto">{service}</h3>
        <div className='flex justify-between items-center mb-2 ml-2 sm:ml-0 sm:mb-0'>
          <Link to="/Service" state={{ service, city, landmark, address }}>
            <button className="bg-blue-500 text-white sm:px-4 sm:py-2 sm:text-base text-sm px-2 py-1  rounded-md focus:outline-none hover:bg-blue-300">
              Book Now
            </button>
          </Link>
          <p className="sm:ml-1 ml-2 sm:text-base text-xs">Starting at ₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
