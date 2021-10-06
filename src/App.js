import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAuthentication from './Firebase/fireabase.initialize';
initializeAuthentication();
const provider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState({})
  const handlegoogleSignIn = () =>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
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
  return (
    <div className="App">
      <button onClick={handlegoogleSignIn}>Google Sign in</button>
      <br />
      {
        user.email && <div>
          <h2>Welcome {user.name}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
