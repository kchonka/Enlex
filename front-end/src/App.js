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
import SignUpForm from "./SignUpForm.js"

const backgroundImageStyle = {
  background: "black",
  backgroundImage: `url(${globe})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundPosition: 'center',
  height: '100vh',
  margin: 0,
  padding: 0
}

class App extends Component {
  render (){
    return(
      <BrowserRouter>
        <div style={backgroundImageStyle}>
          <NavBar/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Home" component={Home}/>
             <Route path="/About" component={About}/>
             <Route path="/login" component={LogIn}/>
             <Route path="/signup" component={SignUpForm}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
