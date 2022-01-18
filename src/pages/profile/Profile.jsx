import React from 'react'
import './profile.css'
import Post from '../../components/feed/posts/Post'
import { Posts, Users } from '../../DummyData'
import Friend from './Friend/Friend'
import {Link} from 'react-router-dom';

export default function profile({currentUserId}) {

    const postsByUser = Posts.filter((a) => (currentUserId === a.userId));
    const currentUserProfile = Users.filter((a) => currentUserId === a.id);
    const userFriends = Users.filter((b) => (currentUserProfile[0].friendsId.includes(b.id)))

    return (
        <div className='profile'>
            <div className="profileWrapper">
                <div className="profilePics">
                    <img src="/assets/2.png" alt="" className="coverPhoto" />
                    <img src="/assets/1.png" alt="" className="profilePic" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{Users.filter((u)=>u.id === currentUserId)[0].firstName + " " + Users.filter((u)=>u.id === currentUserId)[0].lastName}</h4>
                    <h4 className="profileInfoHobbies">{Users.filter((u)=>u.id === currentUserId)[0].hobbies}</h4>
                </div>
                <div className="postsByUser">
                {postsByUser.map((p) => (<Post key={p.id} post={p}/>))}
                </div>
                <div className="friendList">
                    <br></br>
                    FRIENDS:
                    {userFriends.map((p) => (
                         <Friend key={p.id} friend={p}></Friend>
                    ))}
                </div>
                </div>
        </div>
    )
}

