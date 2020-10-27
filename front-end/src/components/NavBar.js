import React, { Component } from 'react';
import logo from '../images/logowhitepurple.png'
import { useAuth0 } from "@auth0/auth0-react";

const navbarstyle = {
  background: "#27259B",
  alignItems: "center",
  width: "100%",
  overflow: "hidden"
}

const aStyle = {
  display: "inline-block",
  padding: "15px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: 20,
  color: "#FFFFFF",
}

const logoStyle = {
  height: "80px",
  width: "140px",
  paddingBottom: "6px",
  paddingLeft: "6px",
  paddingTop: "2px",
  float: "left",
  position: "relative"
}

class NavBar extends Component{
  render(){
      return(
        <div style={navbarstyle}>
          <a href="/"><img src={require('../images/logowhiteblue2.png')} style={logoStyle}/></a>
          <nav style={{float: "right", paddingRight: "15px"}}>
            <ul>
              <li style={{display: "inline-block"}}><a style={aStyle} href="/About">About</a></li>
              <li style={{display: "inline-block"}}><a style={aStyle} href="https://github.com/kchonka/Enlex">Source</a></li>
              <li style={{display: "inline-block"}}><a style={aStyle} href="/dashboard">My Account</a></li>
            </ul>
          </nav>
        </div>
      );
  }
}

export default NavBar;
