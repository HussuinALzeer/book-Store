import { doc, setDoc,getDoc } from "firebase/firestore"; 
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
// import { getDatabase, ref, child, push, update } from "firebase/database";
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { useNavigate } from "react-router-dom";


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

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


firebase.initializeApp(firebaseConfig)






export const db = getFirestore(app);
export const storage = getStorage(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

 const firestore =firebase.firestore()

provider.setCustomParameters({
  'prompt': 'select_account'
});


////////////////// sign out ////////////////////

export const SignOut = () =>{
        const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}


////////////////// google login ////////////////

export const signInWithGoogle = () => {
  

  const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

}

////////////////// email password login /////////////////

export const CreateWithEmailPassword = (email,password) =>{
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

/////////// create user doc/////////////////


export const createUserProfileDocument = async (userAuth, addtionalData) =>{
  if(!userAuth)return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);

  const snapShot =await userRef.get();

  // console.log(firestore.doc('users/445asd'));
  
  if(!snapShot.exists){

    const {displayName,email} = userAuth;
    const createAt= new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,   
        ...addtionalData 
      });
    } catch (error) {
      
    }
      
    
    
  }

  return userRef;
}

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

