import React from 'react';
import Tile from './Tile.js';
import './learn.css';

export class Learn extends React.Component{
    render(){
        return(
            <div id="learnPage">
                <div id="info">
                    <h1> Explore News in a Foreign Language</h1>
                    <h4> Select a Target Language in the upper right corner to get started</h4>
                    <h4> Showing Target Language {this.props.target} </h4>
                </div>
                <div id="articles">
                    <Tile title={"Random Title 1"}/>
                    <Tile title={"Random Title 2"}/>
                    <Tile title={"Random Title 3"}/>
                </div>
            </div>
        )
    }
}

