import React from 'react';
import "./assets/styles/App.scss"

const image = require("./assets/img/profile.jpg");
const dotted = require("./assets/img/circles.svg");
const mainCircle = require("./assets/img/square.svg");
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a className="NavItem">Home</a>
          <a className="NavItem">About</a>
          <a className="NavItem">Projects</a>
        </nav>
      </header>
      <main>
        <section className="Text">
          <div>
            <img src={dotted} alt="dotted"/>
          </div>
          <span className="Greetings">Hi there, I'm</span>
          <span className="Name">Brian Cheruiyot</span>
          <div className="NameLine"/>
          <span className="Stack">FRONT-END DEVELOPER</span>
          <div className="Language">
            <span>Javascript/ReactJS</span>
          </div>
          <span className="Description">
            I create modern and responsive websites for mobile and desktops
          </span>
          <div className="CirclesOverlay">
            <img src={mainCircle} alt="dotted" className="DottedCircles"/>
          </div>
        </section>
        <section className="ProfileImage">
          <img src={image} alt="profile-image"/>
        </section>
        <section className="PageSlider">
          <div className="Slider"/>
        </section>
      </main>
    </div>
  );
}

export default App;
