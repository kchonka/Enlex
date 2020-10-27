import React, { Component } from 'react';

const sidebarstyle = {
  background: "#F0F3F1",
  height: "100vh",
  width: "250px",
  paddingTop: "30px",
  paddingLeft: "8px",
  margin: 0,
  float: "left",
  alignItems: "center",
  verticalAlign: "middle"
}

const aStyle = {
  padding: "10px 10px 20px 40px",
  fontSize: "22px",
  fontWeight: "bold",
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
