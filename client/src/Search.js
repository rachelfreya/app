import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
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
        <form>
          <FormGroup
            controlId='formBasicText'
          >
            <ControlLabel>Enter Location</ControlLabel>
            <FormControl
              type='text'
              value={this.props.value}
              onChange={this.props.handleChange}
              placeholder='Full address, city + state or zip code'
            />
          </FormGroup>
        </form>
        <Button bsStyle='success' onClick={this.props.searchCity}>Submit</Button>
      </div>
    );
  }
}

export default Search;
