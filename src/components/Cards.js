import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from '../assets/Images/img-9.jpg';
import img2 from '../assets/Images/img-2.jpg';
import img3 from '../assets/Images/img-3.jpg';
import img4 from '../assets/Images/img-4.jpg';
import img8 from '../assets/Images/img-8.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              price1='$109.90'
              price='$49.90'
              path="/services"
            />
            <CardItem
              src={img2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              price1='$299.90'
              price='$149.90'
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              price1='$199.90'
              price='$119.90'
              path="/services"
            />
            <CardItem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              price1='$399.90'
              price='$249.90'
              path="/products"
            />
            <CardItem
              src={img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              price1='$289.90'
              price='$149.90'
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
