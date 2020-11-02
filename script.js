function validarFormulario(){
	var verificar=true;
	var formulario = document.getElementById("formulario");
	var rut = document.getElementById("rut");
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var email = document.getElementById("email");
	var comentario = document.getElementById("comentario");	

	if(!rut.value){
		alert("Escriba su rut por favor.");
		rut.focus();
		verificar=false;
		return false;
	}
	else if(isNaN(rut.value)){
		alert("Inserte solo numeros por favor");
		rut.focus();
		verificar=false;
		return false;
	}
	else if(!nombre.value){
		alert("Esciba su nombre por favor.");
		nombre.focus();
		verificar=false;
		return false;
	}
	else if(!apellido.value){
		alert("Esciba su apellido por favor.");
		apellido.focus();
		verificar=false;
		return false;
	}
	else if(!email.value){
	alert("Escriba su email por favor.");
	email.focus();
	verificar=false;
	return false;
	}
	else if(!comentario.value){
	alert("el campo comentarios es requerido");
	comentario.focus();
	verificar=false;
	return false;
	}
	else if(comentario.value.length > 1000){
	alert("El campo comentarios no puede tener mas de 1000 caracteres.");
	comentario.focus();
	verificar=false;
	return false;
	}
	
	if(verificar==true){
	formulario.submit();
	}
}
function limpiarFormulario(){
	formulario.reset();
}
function calcular(){
	var contadorChar= document.getElementById("contador-char").innerHTML=1000 -formulario.comentario.value.length;
}
window.onload=function(){
	var botonLimpiar=document.getElementById("limpiar");
	botonLimpiar.onclick=limpiarFormulario;
	var botonEnviar=document.getElementById("enviar");
	botonEnviar.onclick=validarFormulario;
}
