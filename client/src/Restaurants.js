import React from 'react';

import './Restaurants.css';
import Listing from './Listing';
import Pages from './Pages'

import { Media } from 'react-bootstrap';

const Restaurants = props => {
  const restaurants = props.restaurants.filter((restaurant, i) => i < props.limit && i >= props.limit - 20);
  return (
    <div>
      <Media.List>
      {restaurants.map((restaurant, i) =>
        <Media.ListItem className={i % 2 === 0 ? '' : 'color'} key={restaurant.id}>
          <Media.Left>
            <img width={64} height={64} src={restaurant.image_url} alt=''/>
          </Media.Left>
          <Media.Body>
            <Media.Heading><a href={`https://www.yelp.com/biz/${restaurant.id}`} target='_blank'>{restaurant.name}</a></Media.Heading>
            <Listing restaurant={restaurant} />
          </Media.Body>
        </Media.ListItem>
        )}
      </Media.List>
      <Pages items={props.items} activePage={props.activePage} handleSelect={props.handleSelect} />
    </div>
  )
};

export default Restaurants;
