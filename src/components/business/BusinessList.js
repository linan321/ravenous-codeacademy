import React from 'react'
import './BusinessList.css';
import business from '../business/business';

class BusinessList extends React.Component {
  render(){
    return(
  <div className ="BusinessList">
<Business />
<Business />
<Business />
<Business />
<Business />
<Business />
</div>
);
  }
};

export default BusinessList;
