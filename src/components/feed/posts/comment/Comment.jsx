import React from 'react'
import './comment.css'

export default function Comment() {
    return (
        <div className='comment'>
            <div className="commentWrapper">
                <div className="commentGroup">
                <img src="/assets/1.png" height="5px" width="5px" className="profilePicture" />
                    <div className="commentContent">
                        <div className="userName">
                            Javs Salvador
                        </div>
                        <div className="mainComment">
                            HAHAHAHAHHAHAHA SAME PARE
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
