import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, imageUrl }) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar' src='' alt='종운' />
                <h3>{username}</h3>
            </div>
            
            <img className='post__image' src={imageUrl} alt='' />

            <h4 className='post__text'><strong>종운</strong> {caption} </h4>
        </div>
    )
}

export default Post
