function login() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const confirmpassword = document.getElementById('confirmpassword').value;
   const fullname = document.getElementById('fullname').value;
   
   if((username == "") || (password == "") || (confirmpassword == "") || (fullname == "")) {
         alert("Dapat Kargaan Amin");
   }
   else if (password !== confirmpassword) {
         alert("Hn Agparis Ti Pass");
      }
   else {
      alert("Register successfully")
   }
}