
var firebaseConfig = {
    apiKey: "AIzaSyCMmvjX-CA69isAPmyL3PzHuCn2fNOxJWM",
    authDomain: "practiceproject-e3a3f.firebaseapp.com",
    databaseURL: "https://practiceproject-e3a3f-default-rtdb.firebaseio.com",
    projectId: "practiceproject-e3a3f",
    storageBucket: "practiceproject-e3a3f.appspot.com",
    messagingSenderId: "547097577138",
    appId: "1:547097577138:web:c1ac3fce91bb8a2a01abab"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function add_user(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Hello World"
    })
}
  