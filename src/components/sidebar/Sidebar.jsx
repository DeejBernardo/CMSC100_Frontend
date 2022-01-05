import React, {useState} from 'react'
import './sidebar.css'
import {sidebarData} from './sidebarData'
import {MenuOpen, Close} from '@material-ui/icons'
import {Link} from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar'

export default function Sidebar() {


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
          <Topbar/>
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
                <li className={item.cName}>
                  <Link to={item.path}>
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