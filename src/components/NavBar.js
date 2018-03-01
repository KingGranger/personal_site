import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  return (
      <Menu >
        <Menu.Item name="Me">
            <NavLink to='/'>Me</NavLink>
        </Menu.Item>
        <Menu.Item name="Bio">
            <NavLink to='/Bio'>Bio</NavLink>
        </Menu.Item>
        <Menu.Item name="Projects">
            <NavLink to='/Bio'>Projects</NavLink>
        </Menu.Item>
      </Menu>
  )
}

export default NavBar;
