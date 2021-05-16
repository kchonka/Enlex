import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./sidebar.css";

export class SideBar extends React.Component{
  render(){
      return(
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>World News</MenuItem>
            <MenuItem>Sports</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      )
  }
}

export default SideBar;