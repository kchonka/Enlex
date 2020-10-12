import React from 'react'
import AnimateOnChange from 'react-animate-on-change';
import FadeIn from 'react-fade-in';
import TextLoop from "react-text-loop";
import globe from './images/globe.png';

// CSS Embedded Styling
const backgroundImageStyle = {
  backgroundImage: `url(${globe})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundPosition: 'center',
  height: '100vh',
  margin: 0,
}

const logoStyle = {
  font: "Ariel",
  fontSize: 70,
  color: "#424FFC",
  textAlign: "left",
  paddingLeft: "25px",
  paddingTop: "10px",
  margin: 0
}

const StatementStyle = {
  fontSize: 28,
  color: "#FFFFFF",
  textAlign: "center",
}

const textStyle = {
  font: "Trebuchet MS",
  fontSize: 25,
  //fontWeight: "bold",
  color: "#ED2550",
  textAlign: "center"
}

export const SampleLang = () => {
  return (
    <div style={textStyle}>
      <TextLoop interval={1000}>
        <span style={textStyle}> Español </span>
        <span style={textStyle}> Français </span>
        <span style={textStyle}> Русский </span>
        <span style={textStyle}> العربية </span>
        <span style={textStyle}> Deutsch </span>
        <span style={textStyle}> Украинский </span>
        <span style={textStyle}> Italiano </span>
        <span style={textStyle}> 日本語 </span>
        <span style={textStyle}> বাংলা </span>

      </TextLoop>
    </div>
  )
};

export const Home = () => (
    <div style={backgroundImageStyle}>
      <h1 style={logoStyle}>Enlex</h1>

      <FadeIn>
        <h2 style={StatementStyle}>
          The flashcard learning program that exposes you to new <br></br>
          vocabulary in ANY target language.
        </h2>
      </FadeIn>

      <SampleLang></SampleLang> // Looping of different languages
    </div>
)
