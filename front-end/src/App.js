import React from 'react';
import world from './images/world.jpg';

function App() {
  const logoStyle = {
    font: "Ariel",
    fontSize: 65,
    color: "#27C777",
    textAlign: "left",
    paddingLeft: "40px",
    paddingTop: "20px",
    margin: 0
  }

  return (
    <div style={{ backgroundImage: `url(${world})`,backgroundRepeat:'no-repeat',
    backgroundSize:'cover', backgroundPosition: 'center', height: '100vh', margin: 0}}>
      <h1 style={logoStyle}>Enlex</h1>
    </div>

  );
}

export default App;
