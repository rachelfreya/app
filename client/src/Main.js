import React from 'react';

import Restaurants from './Restaurants';
import Jumbo from './Jumbo';

const Main = props => (
  <div>
    {
      props.searched ?
      <Restaurants restaurants={props.restaurants} limit={props.limit} items={props.items} activePage={props.activePage} handleSelect={props.handleSelect} />
      :
      <Jumbo />
    }
  </div>
)

export default Main;
