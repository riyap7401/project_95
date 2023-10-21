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


function addUser()

{

   user_name = document.getElementById("user_name").value;

   firebase.database().ref("/").child(user_name).update({

   action : "chucking things at Georgina"

   });

}