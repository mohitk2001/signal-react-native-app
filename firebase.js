import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDBgNQKBhOYJ4AZ7JK6Xf98WUsKPRHH330",
    authDomain: "signal-clone-e2508.firebaseapp.com",
    projectId: "signal-clone-e2508",
    storageBucket: "signal-clone-e2508.appspot.com",
    messagingSenderId: "190495777043",
    appId: "1:190495777043:web:f6bd0fb66312f00dfc7ae6"
  };

  let app;
  if(firebase.apps.length){
    app=firebase.initializeApp(firebaseConfig)
  }
  else{
    app=firebase.app();
  }

  const db=app.firestore();
  const auth=firebase.auth();

  export {db,auth}