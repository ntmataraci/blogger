import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./firebase";


const readDatabase =async () => {
const querySnapshot = await getDocs(collection(db, "messages"));
const toArray=[]
querySnapshot.forEach((doc) => {
    toArray.push(doc.data())
//   console.log(`${doc.id} => ${doc.data()}`);
// return(doc.data())

});
return toArray
}

export default readDatabase

