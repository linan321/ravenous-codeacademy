import React from 'react'
import './business.css';

const business  = {
  imageSrc:'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg'
 name: 'MarginOtto Pizzeria',
 address: '1010 Paddington Way',
 city: 'Flavortown',
 state: 'NY',
 zipCode: '10101',
 category: 'Italian',
 rating: 4.5,
 reviewCount: 90
};

class Business extends React.Component {
  render(){
    return(
      <div className ="Business">
  <div className ="image-container">
    <img src={business.imageSrc} alt=''/>
  </div>
  <h2>{Business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{Business.address}</p>
      <p>{Business.city}</p>
      <p>{`${business.state} ${business.zipCode}`}</p>
    </div>
    <div className="Business-reviews">
      <h3>{Business.category.toUpperCase()}</h3>
      <h3 className="rating">{`${business.rating} stars`}</h3>
      <p>{`${business.reviewCount} reviews`} </p>
    </div>
  </div>
</div>
);
  }
}


export default Business;
