function login() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   const error = document.getElementById('error');
   if((username == "eliza") && (password == "kikz")) {
         error.innerHTML = "LOGIN SUCCESSFUL";
         error.style.color ="blue";
         error.style.visibility = "visible";
      }
   else {
      error.innerHTML = "Invalid";
      error.style.color ="RED";
      error.style.visibility = "visible";
   }
}