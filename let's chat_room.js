
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB0vfVBgs9jJapLXlg1dZJxVoawtOuPGTk",
      authDomain: "kwitter-app-75c39.firebaseapp.com",
      databaseURL: "https://kwitter-app-75c39-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-75c39",
      storageBucket: "kwitter-app-75c39.appspot.com",
      messagingSenderId: "158011773503",
      appId: "1:158011773503:web:e0bd5132c891b11c4b1e8a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      key:"addmyroomname"
});
localStorage.setItem("room_name",room_name);
window.location="let's chat_page.html";
    }
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
/*row="<div class="room_name" id="+Room_names+"onclick="redirect(this.id)">#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;*/
      //End code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="let's chat_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="let's chat.html";
}