import React from 'react'
import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Home() {

    return (

        <div>
        <div className="homeContainer">
        <Feed/>
            </div>    
        </div>
    )
}