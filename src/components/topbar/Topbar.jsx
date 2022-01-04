import React from 'react'
import "./topbar.css"
import {Search, Person, Notifications} from '@material-ui/icons'

export default function Topbar() {

    return (

        <div className="topbarContainer">
            <div className="topbarLeft">
            <span className="topbarLogo">FB</span>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <input placeholder="Search" className="searchInput" />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbariconItem">
                        <Search/>
                        <span className="topbariconBadge">1</span>
                    </div>
                 <div className="topbariconItem">
                        <Person/>
                        <span className="topbariconBadge">1</span>
                    </div>
                <div className="topbariconItem">
                        <Notifications/>
                        <span className="topbariconBadge">1</span>
                    </div>
                </div>

                <img src="/assets/1.png" height="20px" width="20px" className="DP" />

            </div>
        </div>
    )
}