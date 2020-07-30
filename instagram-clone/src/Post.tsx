import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <Avatar
                className="post__avatar"
                alt='종운'
                src="/static/images/avatar1.jpg"
            />
            

            <img src="https://images.unsplash.com/photo-1596050776384-d4897eff9dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="post__image"/>
            

            <h4 className="post__text"><strong>종운</strong> 인스타그램 클론이라니!!</h4>
        </div>
    )
}

export default Post
