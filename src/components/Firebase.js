import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBK2OZR7c_ xxxxxxxxxxx",
    authDomain: "fir-auth-player.firebaseapp.com",
    projectId: "fer201m-lab",
    storageBucket: "fir-auth-player.appspot.com",
    messagingSenderId: "xxxxxxxxxx",
    appId: "xxxxxxxxxx",
    measurementId: "G-8W8CEFKPF3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
