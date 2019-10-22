import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrC3YCMvqRskLlSI8Tb-FOoCbuFVauByM",
    authDomain: "testing-4bf6a.firebaseapp.com",
    databaseURL: "https://testing-4bf6a.firebaseio.com",
    projectId: "testing-4bf6a",
    storageBucket: "",
    messagingSenderId: "176275501360",
    appId: "1:176275501360:web:1b47141e30ffdbc79e58f5"
};
    
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);