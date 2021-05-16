import React from 'react';
import globe from './images/globe.png';
import { Home } from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import { About } from './About.js';
import { Learn } from './learn/Learn.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Dropdown } from 'semantic-ui-react';


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

class App extends React.Component {
  render (){
    return(
      <BrowserRouter>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Learn" component={Learn}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
