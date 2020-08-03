import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post'
import { db, auth } from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, Input } from '@material-ui/core'
import ImageUpload from './ImageUpload'

interface InnerPost {
  username: string;
  caption: string;
  imageUrl: string;
}

interface PostInterface {
  id: string;
  innerPost: InnerPost;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: `2px solid #000`,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function App() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle)

  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [user, setUser] = useState<firebase.User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);

      } else {
        setUser(undefined);
      }
    })

    return () => {
      unsubscribe();
    }

  }, [user, username]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        innerPost: doc.data() as InnerPost
      })));
    })
  }, []);

  const signUp = (event: any) => {
    event.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then( (authUser) => {
      return authUser.user?.updateProfile ({
        displayName: username
      });
    })
    .catch( (error) => alert(error.message));
  }

  const signIn = (event: any) => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message));

    setOpenSignIn(false);
  }

  const signUpBody = (
    <div style={modalStyle} className={classes.paper}>
      <form className="app__signUp">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />

        <Input 
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" onClick={signUp}>Sign Up</Button>
      </form>
    </div>
  )

  const signInBody = (
    <div style={modalStyle} className={classes.paper}>
      <form className="app__signIn">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />

        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" onClick={signIn}>Sign In</Button>

      </form>
    </div>
  )

  return (
    <div className="App">

      {user?.displayName ? (
        <ImageUpload username={user?.displayName} />
      ): (
        <h3> Sorry you need to login to upload </h3>
      )}

      <Modal open={open} onClose={() => setOpen(false)}>
        {signUpBody}
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        {signInBody}
      </Modal>

      <div className="app__header">
          <img 
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
      </div>

      { user ? (
        <Button onClick={ () => auth.signOut() }> Logout </Button>
      ): (
        <div className="app__loginContainer">
          <Button onClick={ () => setOpenSignIn(true) }> Sign In </Button>
          <Button onClick={ () => setOpen(true) }> Sign Up </Button>
        </div>
      )}

      {
        posts.map(post => (
          <Post id={post.id} username={post.innerPost.username} caption={post.innerPost.caption} imageUrl={post.innerPost.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
