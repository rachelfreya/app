import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Search';
import Restaurants from './Restaurants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      restaurants: [],
      searched: false,
      activePage: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchCity = this.searchCity.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  searchCity() {
    axios.get(`api/food/${this.state.value}`)
    .then(res => {
      this.setState({ restaurants: res.data, searched: true });
      console.log(res.data)
    })
  }

  handleSelect(eventKey) {
    this.setState({ activePage: eventKey})
  }

  render() {
    return (
      <div>
        {this.state.searched ?
          <Restaurants restaurants={this.state.restaurants} limit={this.state.activePage * 20} items={Math.ceil(this.state.restaurants.length/20)} activePage={this.state.activePage} handleSelect={this.handleSelect} />
          :
          <Search value={this.state.value} searchCity={this.searchCity} handleChange={this.handleChange} />}
      </div>
    );
  }
}

export default App;
