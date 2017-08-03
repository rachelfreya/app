import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import NavBar from './Navbar';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      type: '',
      restaurants: [],
      activePage: 1,
      searched: false
    }
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.search = this.search.bind(this);
    this.searchByLocation = this.searchByLocation.bind(this);
    this.searchByBoth = this.searchByBoth.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.priceSortHigh = this.priceSortHigh.bind(this);
    this.priceSortLow = this.priceSortLow.bind(this);
    this.ratingSort = this.ratingSort.bind(this);
  }

  handleTypeChange(e) {
    this.setState({ type: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  searchByLocation() {
    axios.get(`api/food/${this.state.location}`)
    .then(res => this.setState({ restaurants: res.data, searched: true }))
  }

  searchByBoth() {
    axios.get(`api/food/${this.state.location}/${this.state.type}`)
    .then(res => this.setState({ restaurants: res.data, searched: true }))
  }

  search() {
    this.state.type ? this.searchByBoth() : this.searchByLocation()
  }

  ratingSort(restaurants) {
    restaurants.sort((a, b) => b.rating - a.rating);
    this.setState({ restaurants: restaurants })
  }

  priceSortHigh(restaurants) {
    restaurants.sort((a, b) => {
      const aLength = a.price ? a.price.length : 0,
        bLength = b.price ? b.price.length : 0;
      return  bLength - aLength;
    });
    this.setState({ restaurants: restaurants })
  }

  priceSortLow(restaurants) {
    restaurants.sort((a, b) => {
      const aLength = a.price ? a.price.length : 0,
        bLength = b.price ? b.price.length : 0;
      return  aLength - bLength;
    });
    this.setState({ restaurants: restaurants })
  }

  handleSelect(eventKey) {
    this.setState({ activePage: eventKey })
  }

  render() {
    const limit = this.state.activePage * 20,
      items = Math.ceil(this.state.restaurants.length / 20);
    return (
      <div className='container'>
        <NavBar type={this.state.type} location={this.state.location} search={this.search} handleTypeChange={this.handleTypeChange} handleLocationChange={this.handleLocationChange} ratingSort={this.ratingSort} restaurants={this.state.restaurants} priceSortHigh={this.priceSortHigh} priceSortLow={this.priceSortLow} />
        <Main searched={this.state.searched} restaurants={this.state.restaurants} limit={limit} items={items} activePage={this.state.activePage} handleSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
