import React, {Component} from 'react';
import globe from './images/globe.png';
import FadeIn from 'react-fade-in';
import AnimateOnChange from 'react-animation';

function App() {
  const logoStyle = {
    font: "Ariel",
    fontSize: 70,
    color: "#424FFC",
    textAlign: "left",
    paddingLeft: "40px",
    paddingTop: "20px",
    margin: 0
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${globe})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
  }

  const textStyle = {
    //font: "Ariel",
    fontSize: 26,
    color: "#424FFC",
    textAlign: "center",
  }

  return (
    <div style={backgroundImageStyle}>
      <h1 style={logoStyle}>Enlex</h1>

      <FadeIn>
        <h2 style={textStyle}> The flashcard learning program that exposes you to </h2>
        <h2 style={textStyle}> new vocabulary in any target language! </h2>
      </FadeIn>

      <span>Languages</span>
    </div>
  );


}



export default App;
