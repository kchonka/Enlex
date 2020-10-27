import React, { Component } from 'react';

const sidebarstyle = {
  background: "#FFFFFF",
  height: "100%",
  width: "200px",
  paddingTop: "30px",
  margin: 0,
}

const aStyle = {
  padding: "8px 8px 8px 32px",
  fontSize: "25px",
  display: "block",
  color: "#27259B",
  textDecoration: "none",
}

class SideBar extends Component{
  render(){
      return(
        <div style={sidebarstyle}>
          <a style={aStyle} href="/dashboard">Home</a>
          <a style={aStyle} href="/dashboard/sets">Sets</a>
          <a style={aStyle} href="/dashboard/progress">Progress</a>
        </div>

      );
  }
}

export default SideBar;
