import React, {Component} from 'react';
import globe from './images/globe.png';
import FadeIn from 'react-fade-in';
import { Home } from './Home';
import AnimateOnChange from 'react-animate-on-change';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Layout } from './components/Layout';
import { About } from './About.js';
import { LogIn } from './LogIn.js';
import Dashboard from './Dashboard.js';
import ProtectedRoute from "./components/ProtectedRoute";

class App extends Component {
  render (){
    return(
      <BrowserRouter>
        <div>
          <NavBar/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/About" component={About}/>
             <Route path="/login" component={LogIn}/>
             <ProtectedRoute path="/dashboard" component={Dashboard}/>
             <ProtectedRoute path="/dashboard/sets" component={Dashboard}/>
             <ProtectedRoute path="/dashboard/progress" component={Dashboard}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
