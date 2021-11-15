/* Functions to use inside halloween exercise */
/* una  función es un modulo que describe un algoritmo simple.*/
/* en este caso suele tener parámetros, en este caso imagenes */
/* un parametro es la variable sobre la que actua el módulo*/
/* por otra parte javascript es orientado a objetos*/
/* el objeto principal es DOCUMENT, la página*/
function mostrar(imagen){
    document.getElementById(imagen).style.visibility="visible";    
}

function ocultar(imagen){
    document.getElementById(imagen).style.visibility="hidden";    
}

function sonar(sonido){
    document.getElementById(sonido).play();
}

function parar(sonido){
    document.getElementById(sonido).pause();
}