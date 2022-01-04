import React from 'react'
import './sidebar.css'
import {Home, Person} from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
           <div className="sidebarData">
                <ul className="sidebarOptions">
                    <li className="sidebarOption">
                        <div className="sidebarIcon"><Home/></div>
                        <div className="sidebarName">Home</div>
                    </li>
                    <li className="sidebarOption">
                        <div className="sidebarIcon"><Person/></div>
                        <div className="sidebarName">Profile</div>
                    </li>
                    <li className="sidebarOption">
                        <div className="sidebarIcon"><Person/></div>
                        <div className="sidebarName">Profile</div>
                    </li>
                    <li className="sidebarOption">
                        <div className="sidebarIcon"><Person/></div>
                        <div className="sidebarName">Profile</div>
                    </li>
                    <li className="sidebarOption">
                        <div className="sidebarIcon"><Person/></div>
                        <div className="sidebarName">Profile</div>
                    </li>
                    <li className="sidebarOption">
                        <div className="sidebarIcon"><Person/></div>
                        <div className="sidebarName">Profile</div>
                    </li>
                </ul>
            </div>
           </div>
        </div>
    )
}