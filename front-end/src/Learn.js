import React, {Component} from 'react';
import SideBar from './components/SideBar.js';
import Tile from './components/Tile.js';
import './learn.css';


// TODO: write function that takes the width/height of the screen & divdes by how many tiles to display

export const Learn = () => {
    return(
        <div id="learnPage">
            <div id="info">
                <h1> Explore News in a Foreign Language</h1>
                <h4> Select a Target Language in the upper right corner to get started</h4>
            </div>
            <div id="articles">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>
        </div>
        
    )
    
}

