import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD_wqDHEvfAJtsTJDWgD-V0Nx8WzaOX2F8",
    authDomain: "fun-food-friends-99208.firebaseapp.com",
    databaseURL: "https://fun-food-friends-99208.firebaseio.com",
    projectId: "fun-food-friends-99208",
    storageBucket: "",
    messagingSenderId: "341613818168"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;