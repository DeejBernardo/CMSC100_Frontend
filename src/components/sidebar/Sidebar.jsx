import React, {useState} from 'react'
import './sidebar.css'
import {sidebarData} from './sidebarData'
import {MenuOpen, Close} from '@material-ui/icons'
import {Link} from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar'
import { Users } from '../../DummyData';

export default function Sidebar({currentUserId}) {


  const [sidebar, setSidebar] = useState(false);
  function showSidebar() {
    return setSidebar(!sidebar);
  }

    return (
        <>
        <div className="topbarContent">
          <Link to='#' className="menuBars"> 
          <MenuOpen onClick={showSidebar}/>
          </Link>
          <Topbar currentUserId={currentUserId}/>
        </div>
          <nav className={sidebar ? 'navMenuActive' : 'navMenu'}>
            <ul className="navMenuItems">
              <li className="navbarToggle">
                <Link to='#' className='menuBars'>
                  <Close onClick={showSidebar}/>
                </Link>
              </li>
            {sidebarData.map((item,index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} component={Users}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}

            </ul>          
          </nav>
        </>
    )
}