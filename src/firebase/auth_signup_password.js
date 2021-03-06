import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const signUp= (email,password) => {
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export default signUp