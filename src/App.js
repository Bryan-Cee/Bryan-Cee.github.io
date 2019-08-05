import React from 'react';
import "./assets/styles/App.scss"

const image = require("./assets/img/profile.jpg");
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a className="NavItem">Home</a>
          <a className="NavItem">About</a>
          <a className="NavItem">Project</a>
        </nav>
      </header>
      <main>
        <section className="Text">
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
