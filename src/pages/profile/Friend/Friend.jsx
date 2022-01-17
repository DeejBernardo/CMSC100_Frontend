import React from 'react'
import './friend.css'

export default function Friend({friend}) {

    return (
        <div className="post"> 
            
            <div className="postWrapper">
                <div className="postTop">
                    <img src="/assets/1.png" height="20px" width="20px" className="profilePicture" />
                    <div className="postInfo">
                        <div className="userName">
                            {friend.firstName + " " + friend.lastName}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
