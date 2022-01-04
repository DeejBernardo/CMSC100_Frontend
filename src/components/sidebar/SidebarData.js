import React from 'react';
import {Home, Person} from '@material-ui/icons'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Home/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/profile',
    icon: <Person />,
    cName: 'nav-text'
  },
];