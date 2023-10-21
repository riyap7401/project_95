
var firebaseConfig = {

    apiKey: "AIzaSyCEWL7GaiIn4wgvij9m3QUtdSE_yGtCjqM",
    
    authDomain: "kwitter-300f0.firebaseapp.com",
    databaseURL: "https://kwitter-300f0-default-rtdb.firebaseio.com",
    projectId: "kwitter-300f0",
    storageBucket: "kwitter-300f0.appspot.com",
    messagingSenderId: "950223916829",
    appId: "1:950223916829:web:a5184cd5b4e7c6ffa99bf4",
    measurementId: "G-P0VKLQ905K"
  };

  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  
         Room_names = childKey;
  
         console.log("Room Name-" + Room_names);
  
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
         
         document.getElementById("output").innerHTML += row;
  
        });});}
  
  getData();
  
  
  function addRoom()
  
  {
  
     room_name = document.getElementById("room_name").value;
  
     firebase.database().ref("/").child(room_name).update({
  
     purpose : "adding room name"
  
     });
  
     localStorage.setItem("room_name" , room_name);
  
     window.location = "kwitter_page.html";
  
  }
  
  function redirectToRoomName(name)
  
  {
  
    console.log(name);
  
    localStorage.setItem("room_name" , name);
  
    window.location = "kwitter_page.html";
  
  }