import React from 'react'
import './friend.css'
import {Link} from 'react-router-dom';

export default function Friend({friend}) {

    return (
        <div className="post"> 
            
            <div className="postWrapper">
                <div className="postTop">
                    <img src="/assets/1.png" height="20px" width="20px" className="profilePicture" />
                    <div className="postInfo">
                        <Link to={'/profile/' + friend.username}>
                        <div className="userName">
                            {friend.firstName + " " + friend.lastName}
                        </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
