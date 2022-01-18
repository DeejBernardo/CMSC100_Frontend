import React from 'react';
import {Home, Person, Help, Apple} from '@material-ui/icons'
import { Users } from '../../DummyData';
import {getCurrentId} from '../../App.jsx';


const currentUserId = getCurrentId()
const currentUser = Users.filter((a) => a.id === currentUserId)
const currentUsername = currentUser[0].username

export const sidebarData = [

  {
    title: 'Home',
    path: '/',
    icon: <Home />,
    cName: 'navText'
  },
  {
    title: 'Profile',
    path: '/profile/' + currentUsername,
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