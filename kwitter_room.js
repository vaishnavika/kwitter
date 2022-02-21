const firebaseConfig = {
      apiKey: "AIzaSyA2vG42_AEqDyZvSVLlY6nZwx53yaCZxLE",
      authDomain: "kvitter-fbad3.firebaseapp.com",
      databaseURL: "https://kvitter-fbad3-default-rtdb.firebaseio.com",
      projectId: "kvitter-fbad3",
      storageBucket: "kvitter-fbad3.appspot.com",
      messagingSenderId: "3337411970",
      appId: "1:3337411970:web:97da33eb44b365c556839b",
      measurementId: "G-N3ZD2P0TK4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot)
     {
        document.getElementById("output").innerHTML = "";
         snapshot.forEach(function(childSnapshot)
          {
             childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

