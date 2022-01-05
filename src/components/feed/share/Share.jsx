import React from 'react'
import './share.css'
import {PermMedia} from '@material-ui/icons'

export default function Share() {
    return (
        <div className="share"> 
            
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/1.png" height="20px" width="20px" className="profilePicture" />
                    <input placeholder="What's on your mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <div className="shareOptionText">Share</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
