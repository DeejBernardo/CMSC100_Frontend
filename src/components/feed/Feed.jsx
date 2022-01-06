import React from 'react'
import './feed.css'
import Share from './share/Share'
import Post from './posts/Post'
import { Posts } from '../../DummyData'

export default function Feed() {
    
    return (
        <div className='feed'>
            <div className="margin">
            </div>
    <div className="content">
        <div className="feedWrapper">
                <Share/>
                {Posts.map((p) => (<Post key={p.id} post={p}/>))}
            </div>
        </div>
            <div className="margin">
            </div>
        </div>
    )
}
