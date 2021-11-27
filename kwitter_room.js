var firebaseConfig = {
  apiKey: "AIzaSyAtABfCF7HD88iQjP7dMim8oMkZPq0F_Ow",
  authDomain: "kwitter-2f081.firebaseapp.com",
  databaseURL: "https://kwitter-2f081-default-rtdb.firebaseio.com",
  projectId: "kwitter-2f081",
  storageBucket: "kwitter-2f081.appspot.com",
  messagingSenderId: "628740527303",
  appId: "1:628740527303:web:40ab43dae595a829505ae2",
  measurementId: "G-46BG3TECRY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      function addRoom(){
        room_name = document.getElementById("addRoomInput").value;
        firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
      }
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room_name" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='Redirect_Room_Name'>#" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });});}
getData();
function Redirect_Room_Name(name){
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}