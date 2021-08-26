function adduser(){
 user_Name = document.getElementById('user_name').value;
 
 localStorage.setItem('username', user_Name);

 window.location="kwitter_room.html";
}