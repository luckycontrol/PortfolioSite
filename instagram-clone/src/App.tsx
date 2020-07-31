import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post'
import { db } from './firebase';

interface Post {
  username: string;
  caption: string;
  imageUrl: string;
}

function App() {

  var docRef = db.collection("posts").doc("test");
  docRef.get().then(doc => {
    console.log("데이터", doc.data());
  })

  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   db.collection('posts').onSnapshot(snapshot => {
  //     setPosts(snapshot.docs.map(doc => doc.data() as Post ));
  //   })
  // }, []);

  return (
    <div className="App">

      <div className="app__header">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app_headerImage"/>
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
