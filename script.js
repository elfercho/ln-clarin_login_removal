//VARIABLES PARA ELIMINAR EL LOGIN
var lnLogin = document.getElementsByClassName('lnmodal pantalla-completa login')[0];
var cancha = document.getElementsByClassName('modal-scrollable')[0];
var clOverlay = document.getElementById('cboxOverlay');
var clLogin = document.getElementById('colorbox');
var logins = new Array(lnLogin, cancha, clOverlay, clLogin);

//VARIABLES PARA PODER USAR EL SCROLLBAR
var doc = document.getElementsByTagName('html')[0]; // clarin esconde el overflow directamente en el tag HTML
var cuerpo =document.getElementsByTagName('body')[0]; // canchallena(lanacion) lo hace en la etiqueta BODY


for(var i=0; i<logins.length; i++){
	if(logins[i])
		logins[i].parentElement.removeChild(logins[i]);
}

//CLARIN
if(doc.style.overflowY == "hidden") 
	doc.style.overflowY = "";

//CANCHALLENA(lanacion)
if(cuerpo.classList.contains("modal-open") || cuerpo.classList.contains("page-overflow")) 
	cuerpo.classList.remove("modal-open", "page-overflow");

