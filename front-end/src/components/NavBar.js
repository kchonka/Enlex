import React, { Component } from 'react';
import logo from '../images/logowhitepurple.png'

const ulStyle = {
  margin: 0,
  padding: 0,
  display: "inline-block",
  overflow: "hidden",
}

const aStyle = {
  display: "block",
  float: "right",
  padding: "12px",
  paddingLeft: "20px",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: 20,
  color: "#FFFFFF",
}

const logoStyle = {
  display:'inline-block',
  height: "80px",
  width: "140px",
  position: "relative"
}

class NavBar extends Component{
  render(){
      return(
        <div style={{ background: "linear-gradient(#424FFC, black)", overflow:"hidden"}}>
          <img src={require('../images/logowhiteblue2.png')} style={logoStyle}/>
          <ul style={ulStyle}>
            <li style={{display: "inline-block"}}><a style={aStyle} href="/">Home</a></li>
            <li style={{display: "inline-block"}}><a style={aStyle} href="/About">About</a></li>
            <li style={{display: "inline-block"}}><a style={aStyle} href="https://github.com/kchonka/Enlex">Source</a></li>
          </ul>
        </div>
      );
  }
}

export default NavBar;
