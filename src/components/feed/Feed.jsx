import React from 'react'
import './feed.css'
import Share from './share/Share'
import Post from './posts/Post'

export default function Feed() {
    return (
        <div className='feed'>
            <div className="margin">
            </div>
    <div className="content">
        <div className="feedWrapper">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
            <div className="margin">
            </div>
        </div>
    )
}
