import React, {Component} from 'react';
import SideBar from './components/SideBar';
import globe from './images/globe.png';

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


class Dashboard extends Component{
  render(){
    return(
      <div style={backgroundImageStyle}>
        <SideBar/>
      </div>
    );
  }
}

export default Dashboard;
