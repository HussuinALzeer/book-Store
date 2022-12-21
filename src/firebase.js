import { doc, setDoc,getDoc } from "firebase/firestore"; 
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getDatabase, ref, child, push, update } from "firebase/database";
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8xj2CDB0QeauPC5tP7SaqODcHjQ-S1C0",
  authDomain: "book-store-c3b9d.firebaseapp.com",
  projectId: "book-store-c3b9d",
  storageBucket: "book-store-c3b9d.appspot.com",
  messagingSenderId: "174244319066",
  appId: "1:174244319066:web:fa5c40600d962cd40e6d63"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const db = getFirestore(app);

export const storage = getStorage(app);

////////////////// add /////////////////

export const AddaBook = async (name,author,booknumber,pages,data,summary,img,price,lang) => {
   await addDoc(collection(db, "books"), {
    name: name,
    author: author,
    booknumber:booknumber,
    pages:pages,
    data:data,
    summary:summary,
    img:img,
    price:price,
    lang:lang
  });
}
//////////////////
////////////////// get doc ////////////////

export const editBook = async (id,name,author,booknumber,data,pages,summary,lang,img,price) =>{
  await setDoc(doc(db, "books", id), {
   
    name:name,
    author:author,
    booknumber:booknumber,
    data:data,
    pages:pages,
    summary:summary,
    lang:lang,
    img:img,
    price:price
  });
  
}


// export function writeNewPost(uid, username, picture, title, body) {
//   const db = getDatabase();

//   // A post entry.
//   const postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//     authorPic: picture
//   };

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(db), 'books')).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return update(ref(db), updates);
// }

