function muestra_oculta(id){
   
    let div = document.getElementById(id);
    
    if (div.style.display == "none"){ 
      div.style.display = "flex";
    } 
    else {
      div.style.display = "none";
    }
}

function validar() {
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
   
    if (nombre == "" || email == "" || mensaje == "") {
      alert("Por favor complete todos los campos");
      return false;
    }
  
   
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      alert("Por favor ingrese un correo electrónico válido");
      return false;
    }
  
 
    alert("El formulario se envió correctamente");
    return true;
  }
  