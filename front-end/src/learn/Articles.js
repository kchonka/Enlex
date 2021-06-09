import React from 'react';
import Tile from './Tile.js';

export default class Articles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    render(){
        return(
            <div>
                {this.props.articles.map((a) => (<Tile title={a.title}/>))}
            </div>
        )
    }
}