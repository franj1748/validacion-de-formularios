# Simulador de envío de correo

Se pone en práctica la validación de formularios, verificando que ninguno de los campos esté vació al momento de enviar el formulario y que el campo de email tenga un formato válido.  

## Lenguajes

* HTML.
* CSS.
* JavaScript.
* Bootstrap 5.

## Funcionamiento 

Todo el código de la verificación de los campos, se encuentra en el archivo `app.js`, que luego de declarar las variables necesarias, carga un manejado de eventos para deshabilitar el botón de envío del formulario:

![Evento_inicial](https://accesoweb.online/images/simulador_correo/contentload.png)

Luego, se detecta el evento del envío del formulario para mostrar el spinner de carga y el mensaje de envío satisfactorio, después de 2.5 segundos: 

![Evento_inicial](https://accesoweb.online/images/simulador_correo/submit.png)

El evento `blur` de cada uno de los campos de formulario, llama a la función `validarCampo()` que verifica que ningún campo esté vacío y que el formato del correo electrónico sea valido `(cuerpo@dominio.com)`, mediante una expresión regular:

![Evento_inicial](https://accesoweb.online/images/simulador_correo/validar.png)

### Contacto: 

* [Linkedin]
* [GitHub]
* [Telegram]











[Linkedin]:https://www.linkedin.com/in/francisco-elis-24506b209
[GitHub]:https://github.com/franj1748
[Telegram]:https://t.me/franciscoj1748

