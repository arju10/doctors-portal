// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId:  process.env.REACT_APP_appId 
// };

const firebaseConfig = {
  apiKey: "AIzaSyCduhcPHm-5-yDiYnL4pCK5iZ-oWA_uIZo",
  authDomain: "doctors-portal-47a06.firebaseapp.com",
  projectId: "doctors-portal-47a06",
  storageBucket: "doctors-portal-47a06.appspot.com",
  messagingSenderId: "471097932146",
  appId: "1:471097932146:web:c599ebc474d785dcb405eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;