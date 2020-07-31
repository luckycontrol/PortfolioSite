import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

interface PostProp {
    username: string;
    caption: string;
    imageUrl: string;
}

function Post(props: { username: string, caption: string, imageUrl: string }) {
    
    return (
        <div className="post">

            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={props.username}
                    src="/static/images/avatar1.jpg"
                />
                <h3> {props.username} </h3>
            </div>
            

            <img src={props.imageUrl} alt="" className="post__image"/>
            

            <h4 className="post__text"><strong>{props.username}</strong> {props.caption}</h4>
        </div>
    )
}

export default Post
