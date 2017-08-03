import React from 'react';

import './Listing.css';

const Listing = props => {
  const restaurant = props.restaurant;
  const categoryStr = () => restaurant.categories.reduce((str, item) => (str + item.title + ', '), '').slice(0, -2);
  const price = restaurant.price ? restaurant.price : 'N/A';
  return (
    <div className='listing-container'>
      <div className='column'>
        <div>{`${restaurant.rating} stars (${restaurant.review_count} ratings)`}
        </div>
        <div>{`${price} - ${categoryStr()}`}</div>
      </div>
      <div className='column'>{`${restaurant.display_phone}`}</div>
      <div className='column'>
        <div>{`${restaurant.location.display_address[0]}`}</div>
        <div>{`${restaurant.location.display_address[1]}`}</div>
      </div>
    </div>
  )
};

export default Listing;
