import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAux2ptbn4mqymDsWLxqfZkGbHHTEgZRUM",
    authDomain: "my-app-8f8f6.firebaseapp.com",
    projectId: "my-app-8f8f6",
    storageBucket: "my-app-8f8f6.firebasestorage.app",
    messagingSenderId: "580750210375",
    appId: "1:580750210375:web:707cc6f41645216c3a8862",
    measurementId: "G-MCVB3SHBX9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider};

