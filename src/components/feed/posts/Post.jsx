import React from 'react'
import './post.css'
import { Star } from '@material-ui/icons'

export default function Post() {
    return (
        <div className="post"> 
            
            <div className="postWrapper">
                <div className="postTop">
                    <img src="/assets/1.png" height="20px" width="20px" className="profilePicture" />
                    <div className="postInfo">
                        <div className="userName">
                            Pedro Gomez
                        </div>
                        <div className="time">
                            1hr
                        </div>
                    </div>
                </div>
                <div className="postContent">
                    hehe potanginang buhay
                </div>
                <div className="postStars">
                    <div className="starButton">
                    <Star/>
                    </div>
                    <div className="numberOfStars">
                        10 stars
                    </div>
                </div>
                <hr className="postHr" />
                <div className="postBottom">
                    <div className="addComment">
                 <input placeholder="Add comment..." className="commentBar" /> 
                 <div className="commentButton">
                            <div className="commentText">Share</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
