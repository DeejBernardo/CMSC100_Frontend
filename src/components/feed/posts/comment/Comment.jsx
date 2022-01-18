import React from 'react'
import './comment.css'
import { Users } from '../../../../DummyData'
import {Link} from 'react-router-dom';

export default function Comment({comment}) {
    return (
        <div className='comment'>
            <div className="commentWrapper">
                <div className="commentGroup">
                <img src="/assets/1.png" height="5px" width="5px" className="profilePicture" />
                    <div className="commentContent">
                    <Link to={'/profile/' + Users.filter((u)=>u.id === comment.userId)[0].username}>
                        <div className="userName">
                        {Users.filter((u)=>u.id === comment.userId)[0].firstName + " " + Users.filter((u)=>u.id === comment.userId)[0].lastName}
                        </div>
                        </Link>
                        <div className="mainComment">
                            {comment.comment}
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
