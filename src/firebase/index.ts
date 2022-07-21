import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHev9g68tduTXTRcdR3I7QCvZIHSKnGHM",
  authDomain: "blog-app-509b6.firebaseapp.com",
  projectId: "blog-app-509b6",
  storageBucket: "blog-app-509b6.appspot.com",
  messagingSenderId: "959777851896",
  appId: "1:959777851896:web:5e0154bfd7ea9aa3666e0d"
};

app.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth }
