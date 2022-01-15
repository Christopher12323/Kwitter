
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB1J4WsdehBRyS60CpRcGRzp8bgM6X5Dps",
      authDomain: "projectname-3368b.firebaseapp.com",
      databaseURL: "https://projectname-3368b-default-rtdb.firebaseio.com",
      projectId: "projectname-3368b",
      storageBucket: "projectname-3368b.appspot.com",
      messagingSenderId: "605738337510",
      appId: "1:605738337510:web:e3bf27ec16c1cb6e966727"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
