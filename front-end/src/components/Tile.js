import React, {Component} from 'react';
import './tile.css';

class Tile extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("Clicked")
    }

    render(){
        return(
            <div id="box" onclick="./home">
                <h2 class="heading"> News </h2>
            </div>
        )
    }
}

export default Tile;