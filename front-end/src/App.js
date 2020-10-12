import React, {Component} from 'react';
import globe from './images/globe.png';
import FadeIn from 'react-fade-in';
import { Home } from './Home';
import AnimateOnChange from 'react-animate-on-change';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';

class App extends Component {
  render (){
    return(
      <Home></Home>
    );
  }
}


export default App;
