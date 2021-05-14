import React, {Component} from 'react';
import './tile.css';

class Tile extends Component{
    constructor(props){
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        
    }

    render(){
        return(
            <div id="box" onClick={this.handleClick}>
                <h4> {this.props.title} </h4>
            </div>
        )
    }
}

export default Tile;