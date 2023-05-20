// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOUAgxq0RnPppbWBMdhiYZ7w84w0thWvg",
  authDomain: "appolo-x-7af97.firebaseapp.com",
  projectId: "appolo-x-7af97",
  storageBucket: "appolo-x-7af97.appspot.com",
  messagingSenderId: "1024782764119",
  appId: "1:1024782764119:web:327ceefa30a4e9b1c8fb12",
  measurementId: "G-3DHPYYEQS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { firebaseConfig, auth };
