import React, {Component} from 'react';
import './tile.css';
import axios from 'axios';

class Tile extends Component{
    constructor(props){
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }

    translateTitle(title, lang){
        // Translate foreign title into English
        axios.post("https://translation.googleapis.com/language/translate/v2", {
           params: {
               q: title,
               source: lang,
               target: 'en',
               apiKey: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
           }
        }) 
        .then(response => {
            console.log(response.data.translations.translatedText[0])
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

    render(){
        return(
            <div id="box" onClick={this.handleClick}>
                <img src={this.props.image} alt="coverPhoto"/>
                <div id="top">
                    <h6> {this.props.title} </h6>
                </div>
                <div id="bottom">
                    <h6> {this.translateTitle(this.props.title, this.props.language)}</h6>
                </div>
            </div>
        )
    }
}

export default Tile;