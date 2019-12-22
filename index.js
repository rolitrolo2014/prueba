function validar (){
    
var user = document.getElementById("user").value;
var password = document.getElementById("password").value;


   if (user ==  "ejemplo@gmail.com" && password== "123456") {
        alert("Iniciando Sesión...");
     }
     else{
       alert("Email y/o contraseña son incorrectos");
    }
     }