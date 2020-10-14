import React, {Component} from 'react';
import globe from './images/globe.png';
import FadeIn from 'react-fade-in';
import { Home } from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
//import { Layout } from './components/Layout';

class App extends Component {
  render (){
    return(
      <div>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    );
  }
}


export default App;
