import React, {Component} from 'react';
import SideBar from './components/SideBar.js';
import Table from './components/Table.js';

const dashboardArea = {
  background: "#FFFFFF",
  height: "100vh",
  alignItems: "center",
  textAlign: "center"
}

class Dashboard extends Component{
  render(){
    return(
      <div>
        <SideBar/>
        <div style={dashboardArea}>
        </div>
      </div>
    );
  }
}

export default Dashboard;
