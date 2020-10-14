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
      <h1 style={textStyle}>Enlex is set out to be a web-app flashcard program to assist people <br></br>
      in language learning. Connecting to the Google Translate API, Enlex will be able to create <br></br>
      vocabulary sets in any desired target language. Vocabulary sets can be created from different <br></br>
      categories of words (ex: food, numbers, common verbs, etc.). <br></br>
      <br></br>
      The goal is for language learners to be able to expose themselves to new vocabulary words for free.</h1>
    </div>
  )
};
