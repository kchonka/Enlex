import React, { Component } from 'react';
import logo from '../images/logowhitepurple.png'

const navbarstyle = {
  background: "#27259B",
  width: "100%",
  overflow: "hidden",
}

const aStyle = {
  display: "inline-block",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "12px",
  fontSize: 20,
  color: "#FFFFFF",
}

const logoStyle = {
  height: "65px",
  width: "120px",
  paddingLeft: "6px",
  paddingTop: "5px",
  float: "left",
  justifyContent: "center",
}

const loginStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: 20,
  color: "#FFFFFF",
  padding: "20px",
}

const signupstyle = {
  display: "inline-block",
  border: "2px solid black",
  borderStyle: "solid",
  borderRadius: "8px",
  padding: "0px 8px",
  background: "#8DCAFF",
  textAlign: "center",
  text: "#000000"
}

const signuptext = {
  display: "inline-block",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "9px",
  fontSize: 20,
  color: "#000000",
}

class NavBar extends Component{
  render(){
      return(
        <div style={navbarstyle}>
          <a href="/"><img src={require('../images/logowhiteblue2.png')} style={logoStyle}/></a>
          <nav>
            <ul style={{float: "left"}}>
              <li style={{display: "inline-block"}}><a style={aStyle} href="/Home">Home</a></li>
              <li style={{display: "inline-block"}}><a style={aStyle} href="/About">About</a></li>
              <li style={{display: "inline-block"}}><a style={aStyle} href="https://github.com/kchonka/Enlex">Source</a></li>
            </ul>
            <ul style={{float: "right", paddingRight: "20px"}}>
              <li style={{display: "inline-block"}}><a style={aStyle} href="/signin"> Sign In</a></li>
              <li style={signupstyle}><a style={signuptext} href="/signup"> Sign Up</a></li>
            </ul>
          </nav>
        </div>
      );
  }
}

export default NavBar;
