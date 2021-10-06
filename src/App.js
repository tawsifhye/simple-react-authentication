import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/fireabase.initialize';
initializeAuthentication();
const provider = new GoogleAuthProvider();
function App() {
  const handlegoogleSignIn = () =>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
  }
  return (
    <div className="App">
      <button onClick={handlegoogleSignIn}>Google Sign in</button>
    </div>
  );
}

export default App;
