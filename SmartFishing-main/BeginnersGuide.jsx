import React from 'react';
import './BeginnersGuide.css';
import Recommendation from './Recommendation';

function BeginnersGuide() {

  return (
    <div className="container">
      <h2>Beginners Guide</h2>
      <h3>The Ultimate Beginners Guide for A New Fisher who want to go Fishing but dont know how</h3>
      <div className="video-cards">
        <div className="video-card">
          <h4>Video 1: How to Fishing For Beginners</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-P0OVbWvw7I?si=V2uzvQ6WOK-f_G4R"
            title="Video 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-card">
          <h4>Video 2: How to Tie a Hook Fishing Line</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-_ftAGkewfE?si=nhjjNC0_8_LNgY7_"
            title="Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-card">
          <h4>Video 3: How to Set Up A Spinning Reel</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SXXSuuZYpY8?si=q__xZMv283HHEjp9"
            title="Video 3"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h1>Recommended Products For You</h1>
      <div><Recommendation/></div>
    </div>
  );
}

export default BeginnersGuide;
