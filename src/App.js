import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAuthentication from './Firebase/fireabase.initialize';
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({})
  const auth = getAuth();
  const handlegoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const {displayName, email, photoURL} = result.user;
      const loggedInUser= {
        name: displayName,
        email: email,
        photo: photoURL
      };
      setUser(loggedInUser);
    })
    .catch(error =>{
      console.log(error.message);
    })
  }

  const handleGitHubSignIn = () =>{
    signInWithPopup(auth, gitHubProvider)
    .then(result => {
      const {displayName, email, photoURL} = result.user;
      const loggedInUser= {
        name: displayName,
        email: email,
        photo: photoURL
      };
      setUser(loggedInUser);
    })
  }
  return (
    <div className="App">
      <button onClick={handlegoogleSignIn}>Google Sign in</button>
      <button onClick={handleGitHubSignIn}>Github Sign In</button>
      <br />
      {
        user.name && <div>
          <h2>Welcome {user.name}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
