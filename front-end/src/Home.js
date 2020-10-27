import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import TextLoop from "react-text-loop";
import globe from './images/globe.png';
import LoginButton from "./LoginButton.js"

const backgroundImageStyle = {
  background: "black",
  backgroundImage: `url(${globe})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundPosition: 'center',
  height: '100vh',
  margin: 0,
  padding: 0
}

const logoStyle = {
  font: "Ariel",
  fontSize: 70,
  color: "#424FFC",
  textAlign: "left",
  margin: 0
}

const StatementStyle = {
  fontSize: 26,
  color: "#8DCAFF",
  textAlign: "center",
  padding: 0,
  margin: 0
}

const textStyle = {
  font: "Trebuchet MS",
  fontSize: 25,
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

export const Home = () => {
    return(
      <div style={backgroundImageStyle}>
        <br/>
        <br/>
        <br/>
        <FadeIn>
          <h1 style={StatementStyle}>
            The flashcard learning program that exposes you to new <br></br>
            vocabulary in ANY target language.
          </h1>
        </FadeIn>
        <br/>
        <SampleLang></SampleLang>
        <br/>
        <br/>
        <LoginButton></LoginButton>
      </div>
    );
}
