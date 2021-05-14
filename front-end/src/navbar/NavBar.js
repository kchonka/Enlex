import React from 'react';
import './navbar.css';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //for the Dropdown component

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { targetLanguage: 'English'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { value }) => {
    this.setState({ targetLanguage: value });
  }

  render(){
      return(
        <div class="navbar">
          <div class="logoBox">
            <a href="/"><img src={require('../images/logowhiteblue2.png')} id="logo"/></a>
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
          <div class="languageSelection">
            <Dropdown
              placeholder='Select Target Language'
              fluid
              selection
              options={languageOptions}
              onChange={this.handleChange}
            />
          </div>
        </div>
      );
  }
}

export default NavBar;
