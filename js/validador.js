// se llaman las constantes o variables a usar.
const misNombres = document.getElementById("nombres");
const misApellidos = document.getElementById("apellidos");
const miIdentificacion = document.getElementById("identificacion");
const miCorreo = document.getElementById("correo");
const miUsuario = document.getElementById("usuario");
const miObservaciones = document.getElementById("observaciones");

const errorNombre = document.getElementById("error_nombres");
const errorApellido = document.getElementById("error_apellidos");
const errorIdentificacion = document.getElementById("error_identificacion");
const errorCorreo = document.getElementById("error_correo");
const errorUsuario = document.getElementById("error_usuario");
const errorObservacion = document.getElementById("error_observaciones");
const errorVacios = document.getElementById("error_vacios");
const mensajeExito = document.getElementById("mensaje_exito");

const iconoOkNombres = document.getElementById("icono_ok_nombres");
const iconoOkApellidos = document.getElementById("icono_ok_apellidos");
const iconoOkIdentificacion = document.getElementById("icono_ok_identificacion");
const iconoOkCorreo = document.getElementById("icono_ok_correo");
const iconoOkUsuario = document.getElementById("icono_ok_usuario");
const iconoOkObservaciones = document.getElementById("icono_ok_observaciones");

const iconoErrorNombres = document.getElementById("icono_error_nombres");
const iconoErrorApellidos = document.getElementById("icono_error_apellidos");
const iconoErrorIdentificacion = document.getElementById("icono_error_identificacion");
const iconoErrorCorreo = document.getElementById("icono_error_correo");
const iconoErrorUsuario = document.getElementById("icono_error_usuario");
const iconoErrorObservaciones = document.getElementById("icono_error_observaciones");

//validar si las cajas de texto estan vacias
function validar(event) {
    event.preventDefault();
      if ((misNombres.value === "")
          || (misApellidos.value === "")
          || (miIdentificacion.value === "")
          || (miCorreo.value === "")
          || (miUsuario.value === "")
          || (miObservaciones.value === "")) {

          errorVacios.classList.add("block");
          
        
      } else {
          mensajeExito.classList.add("block")
          errorVacios.classList.remove("block");
          return;
        
      }
    //  //Se llaman las funciones validadoras
        validarNombres(misNombres);
        validarApellidos(misApellidos);
        validarIdentificacion(miIdentificacion);
        validarCorreo(miCorreo);
        validarUsuario(miUsuario);
        validarObservaciones(miObservaciones);
}


// Validar nombres maximo 60 caracteres
function validarNombres() {
    const nombresRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g; // almacenamos la expresion regular en una constante
    if (nombresRegex.test(misNombres.value)) { //.test ejecuta la ocurrencia o comparacion entre la expresion regular y la cadena de texto.
        errorNombre.classList.remove("block"); // llama la constante errorNombre y con .classList.remove quita el estilo css bloque.
        iconoOkNombres.style.display = "block";
        // return true;
    }  
    else {
        errorNombre.classList.add("block");
        mensajeExito.classList.remove("block");
        iconoErrorNombres.style.display = "block";
        // return false;
    }
}
//validar apellidos maximo 60 caracteres
function validarApellidos() {
    const apellidosRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,60})$/g;
    if (apellidosRegex.test(misApellidos.value)) {
        errorApellido.classList.remove("block");
        iconoOkApellidos.style.display = "block";
        // return false;
    } else {
         errorApellido.classList.add("block");
        // return true;
        mensajeExito.classList.remove("block");
        iconoErrorApellidos.style.display = "block";
    }
}

//validar cedula
function validarIdentificacion() {
    const identificacionRegex = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/gm;
    if (identificacionRegex.test(miIdentificacion.value)) {
        errorIdentificacion.classList.remove("block");
        iconoOkIdentificacion.style.display = "block";
        // return false;
    } else {
        errorIdentificacion.classList.add("block");
        // alert("sobrepasa los cantidad de caracteres permitidos para apellido");
        // return true;
        mensajeExito.classList.remove("block")
        iconoErrorIdentificacion.style.display = "block";
    }
}


//valida el correo
function validarCorreo() {
    const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    if (correoRegex.test(miCorreo.value)) {
        // alert("Correo valido");
        errorCorreo.classList.remove("block");
        iconoOkCorreo.style.display = "block";
        // return true;
    } else {
        // alert("Correo Invalido");
        errorCorreo.classList.add("block");
        mensajeExito.classList.remove("block");
        iconoErrorCorreo.style.display = "block";
        // return false;
        
    }
}
//validar usuario maximo 25 caracteres
function validarUsuario() {
    const usuarioRegex = /^([a-zA-Z0-9_-]{0,25})$/g;
    if (usuarioRegex.test(miUsuario.value)) {
        // alert("Usuario valido");
        errorUsuario.classList.remove("block");
        iconoOkUsuario.style.display = "block";
        // return true;
    } else {
        // alert("sobrepasa los cantidad de caracteres permitidos para usuario");
        errorUsuario.classList.add("block");
        // return false;
        mensajeExito.classList.remove("block");
        iconoErrorUsuario.style.display = "block";
    }
}
//validar observaciones maximo 200 caracteres
function validarObservaciones() {
    const observacionesRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,20})$/g;
    if (observacionesRegex.test(miObservaciones.value)) {
        errorObservacion.classList.remove("block");
        iconoOkObservaciones.style.display = "block";
        // return false;
    } else {
        errorObservacion.classList.add("block");
        // alert("sobrepasa los cantidad de caracteres permitidos para observaciones");
        // return true;
        iconoErrorObservaciones.style.display = "block";
        mensajeExito.classList.remove("block");
        iconoErrorObservaciones.style.display = "block";
    }
}