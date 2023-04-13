# Descripción
Este código es una pequeña aplicación web para encriptar y desencriptar texto mediante una sustitución de vocales y la eliminación de tildes. Además, se proporciona un botón para copiar el texto encriptado o desencriptado al portapapeles.

# Dependencias
boxicons
izitoast

# Funciones
## byId<T extends HTMLElement>(id: string): T
Esta función toma un ID de elemento HTML como argumento y devuelve el elemento correspondiente del tipo especificado. Si el elemento no se encuentra, se lanza un error.

## btnCopyAlert()
Esta función se encarga de la alerta de copia realizada cuando el usuario presiona el botón de copiar. Se utiliza el objeto navigator.clipboard para escribir el texto en el portapapeles del usuario. Después, se muestra una notificación utilizando la librería izitoast.

## contentEncrypted()
Esta función toma el texto del área de texto de entrada y lo encripta mediante una sustitución de vocales y la eliminación de tildes. El texto encriptado se muestra en un elemento HTML.

## contentDecrypted()
Esta función toma el texto del área de texto de entrada y lo desencripta mediante la sustitución de las palabras encriptadas por las vocales correspondientes. El texto desencriptado se muestra en un elemento HTML.

# Eventos
## 'input' en $bcryptTextArea
Este evento se dispara cuando el usuario escribe en el área de texto de entrada. Se utiliza para prohibir las mayúsculas y las tildes en el texto de entrada.

## 'click' en $btnEncrypted
Este evento se dispara cuando el usuario presiona el botón de encriptado. Se llama a las funciones btnCopyAlert() y contentEncrypted() para mostrar el texto encriptado.

## 'click' en $btnDecrypted
Este evento se dispara cuando el usuario presiona el botón de desencriptado. Se llama a las funciones btnCopyAlert() y contentDecrypted() para mostrar el texto desencriptado.
