import { getAuth, signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { app } from "./firebase";


const signIn=(email,password)=>{


    const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
  )
  return(true)
}

  export default signIn