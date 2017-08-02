import React, { Component } from 'react';
import axios from 'axios';
import { Media } from 'react-bootstrap';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Media.List>
        {this.props.restaurants.map(restaurant =>
          <Media.ListItem key={restaurant.id}>
            <Media.Left>
              <img width={64} height={64} src={restaurant.image_url} alt=''/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>{restaurant.name}</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
            </Media.Body>
          </Media.ListItem>
          )}
        </Media.List>
      </div>
    );
  }
}

export default Restaurants;
