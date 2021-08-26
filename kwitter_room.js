
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC4zVh5rx9azgWWu5x2c2cGrbe60hb58_w",
      authDomain: "kwitter-a61b8.firebaseapp.com",
      databaseURL: "https://kwitter-a61b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-a61b8",
      storageBucket: "kwitter-a61b8.appspot.com",
      messagingSenderId: "992896203661",
      appId: "1:992896203661:web:84c6587a2a80858bbf1bc4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome "+ user_name + "!";

    function addRoom(){
          room_name=document.getElementById("room_name").value; 
          firebase.database().ref("/").child(room_name).update{(
                puspose:"adding room name";
          )};
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
