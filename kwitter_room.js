
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
Function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_room.html";
}

function Logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roome_name");
      window.location="index.html";
}