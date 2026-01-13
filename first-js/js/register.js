function register() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const confirmpassword = document.getElementById('confirmpassword').value;
   const fullname = document.getElementById('fullname').value;

   const error = document.getElementById('error');
   if((username == "") || (password == "") || (confirmpassword == "") || (fullname == "")) {
         error.innerHTML = "Dapat Kargaan Amin";
         error.style.color ="green";
         error.style.visibility ="visible";
         
   }
   else if (password !== confirmpassword) {
         error.innerHTML = "Hn Agparis Ti Pass";
         error.style.color = "rgba(37, 11, 185, 1)";
         error.style.visibility ="visible";       
      }
   else {
      error.innerHTML = "NakaRegister KaN";
      error.style.backgroundColor ="red";
      error.style.visibility ="visible";
   }
}