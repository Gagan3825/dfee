import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAym0ZRYLxaRsINetZ7OQ-zptTXw6RfOF4",
    authDomain: "library-management-ff95c.firebaseapp.com",
    projectId: "library-management-ff95c",
    storageBucket: "library-management-ff95c.appspot.com",
    messagingSenderId: "283977733232",
    appId: "1:283977733232:web:47910af3b4b30a108d50b5",
    measurementId: "G-HP0JGSM361"
  };

  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const provider=new GoogleAuthProvider();
  export {auth,provider};