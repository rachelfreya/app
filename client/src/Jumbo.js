import React from 'react';
import './Jumbo.css';
import { Jumbotron } from 'react-bootstrap';

const Jumbo = props => (
  <div>
    <Jumbotron>
      <h1>Welcome!</h1>
      <p>Search by type of attraction and by address, city & state or zip code</p>
    </Jumbotron>
  </div>
);

export default Jumbo;
