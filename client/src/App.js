import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }
  componentDidMount() {
    // axios.get('api/food/boston')
    // .then(res => console.log(res.data))
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  search() {
    axios.get(`api/food/${this.state.value}`)
    .then(res => console.log(res.data))
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
        <Button bsStyle='success' onClick={this.search}>Submit</Button>
      </div>
    );
  }
}

export default App;
