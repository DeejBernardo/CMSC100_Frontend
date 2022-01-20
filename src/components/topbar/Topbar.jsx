import React from 'react'
import "./topbar.css"
import {Link} from 'react-router-dom';
import {ExitToApp} from '@material-ui/icons'
import { Users } from '../../DummyData';

export default function Topbar({currentUserId}) {
    
    return (

        <div className="topbarContainer">
            <div className="topbarLeft">
            <span className="topbarLogo">Social Media</span>
            </div>

            <div className="topbarCenter">
            </div>

            <div className="topbarRight">
                <img src="/assets/1.png" height="20px" width="20px" className="DP" />
                <div className="fullName">
                {Users.filter((u)=>u.id === currentUserId)[0].firstName + " " + Users.filter((u)=>u.id === currentUserId)[0].lastName}
                </div>
                <Link to='#' className="logoutButton">
                    <div className="logoutIcon"></div>
                    <ExitToApp />
                    <div className="logoutText">
                        Log out
                    </div>
                </Link>
            </div>
        </div>
    )
}
