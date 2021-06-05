import React from 'react';
import Tile from './Tile.js';
import SideBar from './SideBar';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //for the Dropdown component
import './learn.css';
import axios from 'axios';

const languageOptions = [
    { key: 'Arabic', text: 'Arabic', value: 'ar' },
    { key: 'English', text: 'English', value: 'en' },
    { key: 'French', text: 'French', value: 'fr' },
    { key: 'German', text: 'German', value: 'de' },
    { key: 'Italian', text: 'Italian', value: 'it' }
  ]

export class Learn extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            targetLanguage: 'en',   // default: English (en)
            isLoaded: false
        }
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.getArticles = this.getArticles.bind(this);
    }

    handleLanguageChange = (e, { value }) => { this.setState({ targetLanguage: value }); }

    getArticles(lang){
        axios.get("https://newsapi.org/v2/top-headlines", {
           params: {
               language: lang,
               apiKey: process.env.REACT_APP_NEWS_API_KEY
           }
        })
        .then(function (response) {
        console.log(response.data);
        })
    }

    componentDidMount() {
        this.getArticles(this.state.targetLanguage);
    }

    componentDidUpdate(){
        this.getArticles(this.state.targetLanguage);
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

