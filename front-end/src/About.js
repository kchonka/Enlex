import React from 'react';
import globe from './images/globe.png';

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

const textStyle = {
  color:"#8DCAFF",
  margin: 0,
  textAlign: "center",
  fontSize: 22,
  paddingTop: 40
}

export const About = () => {
  return(
    <div style={backgroundImageStyle}>
      <h1 style={textStyle}>Enlex is an online flashcard program that makes language learning easier.<br></br>
      <br></br>
      The program works by connecting to the Google Translate API to generate vocabulary sets <br></br>
      in any target language. Vocabulary sets can be created from different categories of <br></br>
      words (ex: food, numbers, common verbs, etc.). <br></br>
      <br></br>
      The goal is for language learners to be able to expose themselves to new vocabulary words for free.</h1>
    </div>
  )
};
