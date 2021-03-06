import React from 'react';
import Tile from './Tile.js';
import SideBar from './SideBar';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; //for the Dropdown component
import './learn.css';
import axios from 'axios';
import Articles from './Articles.js';

const languageOptions = [
    { key: 'Arabic', text: 'Arabic', value: 'ar' },
    { key: 'Chinese', text: 'Chinese', value: 'zh' },
    { key: 'Dutch', text: 'Dutch', value: 'nl' },
    { key: 'English', text: 'English', value: 'en' },
    { key: 'French', text: 'French', value: 'fr' },
    { key: 'German', text: 'German', value: 'de' },
    { key: 'Hebrew', text: 'Hebrew', value: 'he' },
    { key: 'Italian', text: 'Italian', value: 'it' },
    { key: 'Northern Sami', text: 'Northern Sami', value: 'se' },
    { key: 'Norwegian', text: 'Norwegian', value: 'no' },
    { key: 'Portuguese', text: 'Portuguese', value: 'pt' },
    { key: 'Russian', text: 'Russian', value: 'ru' },
    { key: 'Spanish', text: 'Spanish', value: 'es' }

  ]

export class Learn extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            targetLanguage: 'en',   // default: English (en)
            category: null,
            isLoaded: false,
            articles: [],
            tiles: null
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
        .then(response => {
            console.log(response.data.articles)
            this.setState({articles: response.data.articles })
        })
        .catch(error => {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        });
    }

    componentDidMount() {
        this.getArticles(this.state.targetLanguage);
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.targetLanguage !== prevState.targetLanguage){
            console.log('Target language has changed.')
            this.getArticles(this.state.targetLanguage);
        }
    }

    render(){
        return(
            <div id="learnPage">
                <SideBar/>
                <div id="main">
                    <div id="info">
                        <div>
                            <h2 style={{fontWeight: "bold", margin: "5"}}> Exploring News in Foreign Languages</h2>
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
                        <Articles articles={this.state.articles} language={this.state.targetLanguage}/>
                    </div>
                </div>
            </div>
        )
    }
}

