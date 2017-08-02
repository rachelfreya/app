import React, { Component } from 'react';
import { Media, Pagination, Button } from 'react-bootstrap';

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
        <Button bsStyle='success' onClick={() => this.props.priceSort(this.props.restaurants)}>Sort By Price</Button>
        <Button bsStyle='success' onClick={() => this.props.ratingSort(this.props.restaurants)}>Sort By Rating</Button>
        <Media.List>
        {this.props.restaurants.filter((restaurant, i) => i < this.props.limit && i >= this.props.limit - 20).map(restaurant =>
          <Media.ListItem key={restaurant.id}>
            <Media.Left>
              <img width={64} height={64} src={restaurant.image_url} alt=''/>
            </Media.Left>
            <Media.Body>
              <Media.Heading><a href={`https://www.yelp.com/biz/${restaurant.id}`}>{restaurant.name}</a></Media.Heading>
              <p>{`${restaurant.rating} ${restaurant.price}`}</p>
            </Media.Body>
          </Media.ListItem>
          )}
        </Media.List>
        <Pagination
          prev
          next
          first
          last
          boundaryLinks
          items={this.props.items}
          activePage={this.props.activePage}
          onSelect={this.props.handleSelect}
        />
      </div>
    );
  }
}

export default Restaurants;
