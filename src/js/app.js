//* Variables 
/** 
 * El elemento de formulario completo.
 * @type {HTMLElement} 
 */
const formulario = document.querySelector('#formulario');
/** 
 * Input para el correo electrónico.
 * @type {HTMLElement} 
 */
const inputEmail = document.querySelector('#email');
/** 
 * Input para el asunto.
 * @type {HTMLElement} 
 */
const inputAsunto = document.querySelector('#asunto');
/** 
 * Input para el mensaje.
 * @type {HTMLElement} 
 */
const inputMensaje = document.querySelector('#mensaje');
/** 
 * Botón de envío del formulario.
 * @type {HTMLElement} 
 */
const btnEnviar = document.querySelector('#enviar');
/** 
 * Botón para resetear el formulario.
 * @type {HTMLElement} 
 */
const btnReset = document.querySelector('#btnReset');
/** 
 * Mensaje de error en caso de ingresar un email inválido.
 * @type {HTMLElement} 
 */
const validarFormatoEmail = document.querySelector('#validarFormatoEmail');
/** 
 * Expresión regular para validar que el formato del email sea correcto. 
 * @type {RegExp} 
 */
const exr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//* Listeners

// Al cargar la página se inhabilita el botón de envío del formulario.  
document.addEventListener('DOMContentLoaded', () =>{

    btnEnviar.disabled = true;
    
});

// Prevenir el envío del formulario y mostrar el spinner de envío. 
formulario.addEventListener('submit', e => {
    
    const spinner = document.querySelector('.spinner-border');
    e.preventDefault();
    spinner.classList.remove('hide');

    setTimeout(() => {

        spinner.classList.add('hide');
        swal({
            title: "¡Hecho!",
            text: "El mensaje se envió correctamente.",
            icon: "success",
            button: "Aceptar",
        });
        formulario.reset();
        inputEmail.classList.remove('border-success');
        inputAsunto.classList.remove('border-success');
        inputMensaje.classList.remove('border-success');
        btnEnviar.disabled = true;
    }, 2500);

});

// Eliminar estilos al resetear el formulario. 
btnReset.addEventListener('click', () => {
    
    inputEmail.classList.remove('border-success');
    inputAsunto.classList.remove('border-success');
    inputMensaje.classList.remove('border-success');
    
});
    
// Validar que los inputs no estén vacíos y que el campo de email tenga un correo válido. 
inputEmail.addEventListener('blur', validarCampo);
inputAsunto.addEventListener('blur', validarCampo);
inputMensaje.addEventListener('blur', validarCampo);

//* Funciones

/**
 * Validar que los inputs no estén vacíos y que el campo de email tenga un correo válido. 
 * @param {HTMLInputElement} e El elemento input que pierde el foco.
 */
function validarCampo(e){
    
    if (e.target.value.length > 0){
        e.target.classList.remove('is-invalid');
        e.target.classList.add('border-success');
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove('border-success');
    }

    if (e.target.type === 'email'){
        if (!exr.test(e.target.value) && !e.target.classList.contains('is-invalid')){
            validarFormatoEmail.classList.remove('hide');
            validarFormatoEmail.classList.add('text-danger');
            e.target.classList.add('border-danger','text-danger');
        }else{
            validarFormatoEmail.classList.add('hide');
            e.target.classList.remove('border-danger','text-danger');
        }
    }

    if (exr.test(inputEmail.value) && inputAsunto.value !== '' && inputMensaje.value !== ''){

        btnEnviar.disabled = false;
    }

}


