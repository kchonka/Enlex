import React, { Component } from 'react';
import logo from '../images/logowhitepurple.png'
import './navbar.css';

class NavBar extends Component{
  render(){
      return(
        <div class="navbar">
          <div class="logoBox">
            <a href="/"><img src={require('../images/logowhiteblue2.png')} class="logo"/></a>
          </div>
          <div class="navTextBox">
            <nav>
              <ul>
                <li style={{display: "inline-block", fontSize: 20}}><a class="headerText" href="/Home">Home</a></li>
                <li style={{display: "inline-block", fontSize: 20}}><a class="headerText" href="/Learn">Learn</a></li>
                <li style={{display: "inline-block", fontSize: 20}}><a class="headerText" href="/About">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      );
  }
}

export default NavBar;
