import React from 'react';
import { FormGroup, FormControl, Button, Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

import './Navbar.css';

const NavBar = props => (
  <div>
    <Navbar className='nav'>
      <Navbar.Header>
        <Navbar.Brand className='text'>
          <span>Search!</span>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl className='type-form' type='text' placeholder='
            Ex: Restaurants, bars' value={props.type} onChange={props.handleTypeChange} />
            <FormControl type='text' placeholder='Location (required)' value={props.location} onChange={props.handleLocationChange} />
          </FormGroup>
          {' '}
          <Button className='query-button' type='submit' onClick={props.search}>?</Button>
        </Navbar.Form>
        <Nav pullRight>
          <NavDropdown eventKey={3} title='Sort By' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1} onSelect={() => props.ratingSort(props.restaurants)}>Rating</MenuItem>
            <MenuItem eventKey={3.2} onSelect={() => props.priceSortLow(props.restaurants)}>Price (low to high)</MenuItem>
            <MenuItem eventKey={3.3} onSelect={() => props.priceSortHigh(props.restaurants)}>Price (high to low)</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default NavBar;
