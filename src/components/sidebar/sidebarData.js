import React from 'react';
import {Home, Person, Help} from '@material-ui/icons'

export const sidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Home/>,
    cName: 'navText'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Person />,
    cName: 'navText'
  },

  {
    title: 'About',
    path: '/about',
    icon: <Help />,
    cName: 'navText'
  },

]; 