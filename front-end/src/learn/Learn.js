import React from 'react';
import Tile from './Tile.js';
import SideBar from './SideBar';
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
    { key: 'Italian', text: 'Italian', value: 'Italian' }
  ]

export class Learn extends React.Component{
    constructor(props){
        super(props);
        this.state = { targetLanguage: 'English' }  // default to English
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.getArticles = this.getArticles.bind(this);
    }

    handleLanguageChange = (e, { value }) => { this.setState({ targetLanguage: value }); }

    getArticles(){
        const url = "https://newsapi.org/v2/top-headlines&apiKey=" + process.env.REACT_APP_NEWS_API_KEY;
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data["articles"][0]));
    }

    componentDidMount() {
        this.getArticles();
      }

    render(){
        return(
            <div id="learnPage">
                <SideBar/>
                <div id="main">
                    <div id="info">
                        <div>
                            <h2 style={{fontWeight: "bold", margin: "5"}}> Exploring News in Foreign Languages</h2>
                            <h5 style={{margin: "0"}}> Showing results for: {this.state.targetLanguage} </h5>
                            <br/>
                        </div>
                        <div id="dropdownMenu">
                            <Dropdown
                                placeholder='Select Target Language'
                                fluid
                                selection
                                options={languageOptions}
                                onChange={this.handleLanguageChange} 
                            />
                        </div>
                        <div id="newsArticles">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

