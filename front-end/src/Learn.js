import React, {Component} from 'react';
import SideBar from './components/SideBar.js';
import './learn.css';

class Learn extends Component{
    render(){
        return(
            <div style={{width: '100%'}}>
                <SideBar/>
                <div>hello</div>
            </div>
        )
    }
}

export default Learn;