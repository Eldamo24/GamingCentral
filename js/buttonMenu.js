// Formulario

function validarFormulario() {
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let telefonoPatron = /^\d{10}$/;
  
  if (!emailPatron.test(email)) {
    alert("La dirección de correo electrónico no es válida. Por favor ingrese una dirección de correo electrónico válida.");
    return false;
  }
  
  if (!telefonoPatron.test(telefono)) {
    alert("El número de teléfono no es válido. Por favor ingrese un número de 10 dígitos.");
    return false;
  }
  
  return true;
}

// fin formulario


const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
});
