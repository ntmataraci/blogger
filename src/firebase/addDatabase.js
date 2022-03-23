import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase";

const addDatabase = async (email,post,date,img) => {
  const docRef = await addDoc(collection(db, "messages"), {
    email: email,
    post: post,
    date: date,
    img:img,
    id:Math.floor(Math.random()*100000+1)
  });
}

export default addDatabase
