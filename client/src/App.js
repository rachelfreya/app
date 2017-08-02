import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { FormGroup, ControlLabel, FormControl, Button, Media } from 'react-bootstrap';
import Restaurants from './Restaurants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      restaurants: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchCity = this.searchCity.bind(this);
  }
  componentDidMount() {
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  searchCity() {
    axios.get(`api/food/${this.state.value}`)
    .then(res => {
      this.setState({ restaurants: res.data });
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup
            controlId='formBasicText'
          >
            <ControlLabel>Enter Location</ControlLabel>
            <FormControl
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='Full address, city + state or zip code'
            />
          </FormGroup>
        </form>
        <Button bsStyle='success' onClick={this.searchCity}>Submit</Button>
        <Restaurants restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
