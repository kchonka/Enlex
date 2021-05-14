import React from 'react';
import Tile from './Tile.js';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //for the Dropdown component
import './learn.css';

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

export class Learn extends React.Component{
    constructor(props){
        super(props);
        this.state = { targetLanguage: 'English'}
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }

    handleLanguageChange = (e, { value }) => { this.setState({ targetLanguage: value }); }

    render(){
        return(
            <div id="learnPage">
                <div id="header"> 
                    <h1>Explore News in a Foreign Language</h1>
                </div>
                <div id="info">
                    <h4> Select a Target Language to get started.</h4>
                    <h4> Showing results for the {this.state.targetLanguage} language. </h4>
                    <div class="languageSelection">
                        <Dropdown
                            placeholder='Select Target Language'
                            fluid
                            selection
                            options={languageOptions}
                            onChange={this.handleLanguageChange} 
                        />
                </div>
                </div>
                <br/>
                <div id="articles">
                    <Tile title={"Random Title 1"}/>
                    <Tile title={"Random Title 2"}/>
                    <Tile title={"Random Title 3"}/>
                </div>
            </div>
        )
    }
}

