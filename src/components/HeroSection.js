import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video2 from '../assets/Videos/video-2.mp4';
import sales from '../assets/Images/sales.jpg';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video2} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
      <img src={sales} alt="Sales Up to 50% OFF"/>
    </div>
  );
}

export default HeroSection;
