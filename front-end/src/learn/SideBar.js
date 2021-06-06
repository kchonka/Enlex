import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./sidebar.css";

export class SideBar extends React.Component{
  render(){
      return(
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>Business</MenuItem>
            <MenuItem>Entertainment</MenuItem>
            <MenuItem>General</MenuItem>
            <MenuItem>Health</MenuItem>
            <MenuItem>Science</MenuItem>
            <MenuItem>Sports</MenuItem>
          </Menu>
        </ProSidebar>
      )
  }
}

export default SideBar;