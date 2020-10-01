var nombre=null;
var correo=null;
var asunto=null;
var mensaje=null;

function enviarMensaje(){
    let iNombre=document.getElementById("nombre");
    let iCorreo=document.getElementById("correo");
    let iAsunto=document.getElementById("asunto");
    let iMensaje=document.getElementById("mensaje");
    let info=document.getElementById("info");

    nombre=iNombre.value.trim();    //.trim es una fucion que borra los espacios en blanco al inicio y al final de la variable
    correo=iCorreo.value.trim();
    asunto=iAsunto.value.trim();
    mensaje=iMensaje.value.trim();

    if(nombre=='' || correo=='' || asunto=='' || mensaje==''){
        info.innerHTML="<i class='fas fa-times'></i> Hay campos requeridos sin llenar"    //innerHtml le agrega texto a la etiqueta html
        info.classList.add("text-danger");
        info.classList.remove("d-none");
    }
    else{
        info.classList.add("text-success");
        info.classList.remove("d-none");
        info.classList.remove("text-danger");
        info.innerHTML="<i class='fas fa-check'></i> Todo correcto!!!";
    }
}