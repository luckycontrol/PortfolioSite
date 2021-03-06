import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, [])

  return (
    <div className='app'>
      <div className='app__header'>
        <img className='app__headerImage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png' alt='' />
      </div>

      <div className='app__post'>

        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
