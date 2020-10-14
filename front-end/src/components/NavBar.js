import React, { Component } from 'react';

const ulStyle = {
  margin: 0,
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#424FFC" //blue-purple
}

const aStyle = {
  display: "block",
  float: "right",
  padding: "8px",
  textAlign: "center",
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: 18
}

class NavBar extends Component{
  render(){
      return(
        <div>
          <ul style={ulStyle}>
            <li style={{display: "inline"}}><a style={aStyle} href="/Contact">Contact</a></li>
            <li style={{display: "inline"}}><a style={aStyle} href="/About">About</a></li>
            <li style={{display: "inline"}}><a style={aStyle} href="/">Home</a></li>
          </ul>
        </div>
      );
  }
}

export default NavBar;
