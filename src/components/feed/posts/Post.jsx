import React, {useState} from 'react'
import './post.css'
import { Star } from '@material-ui/icons'
import Comment from './comment/Comment.jsx'
import { Users } from '../../../DummyData'
import { Comments } from '../../../DummyData'

export default function Post({post}) {

const [like, setLike] = useState(post.like)
const [isLiked, setIsLiked] = useState(false)

const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
}

    return (
        <div className="post"> 
            
            <div className="postWrapper">
                <div className="postTop">
                    <img src="/assets/1.png" height="20px" width="20px" className="profilePicture" />
                    <div className="postInfo">
                        <div className="userName">
                            {Users.filter((u)=>u.id=== post.userId)[0].username}
                        </div>
                        <div className="time">
                            {post.date}
                        </div>
                    </div>
                </div>
                <div className="postContent">
                   {post.desc}
                </div>
                <div className="postStars">
                    <div className={isLiked ? 'starButtonActive' : 'starButton'}>
                        <Star onClick={likeHandler}/>
                    </div>
                    <div className="numberOfStars">
                        {like} people like this.
                    </div>
                </div>
                <hr className="postHr" />
                <Comment/>
                <div className="postBottom">
                    <div className="addComment">
                 <input placeholder="Add comment..." className="commentBar" /> 
                 <div className="commentButton">
                            <div className="commentText">Comment</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
