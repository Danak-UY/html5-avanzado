window.addEventListener('load',init);
var video,volumen,progreso,container,elementoArrastrandose;
function init(){
	video = document.getElementById('video');
	document.getElementById('play').addEventListener('click',ponerPlay);
	document.getElementById('pausa').addEventListener('click',ponerPausa);
	document.getElementById('stop').addEventListener('click',ponerStop);
	video.addEventListener('timeupdate',actualizarTiempo);
	video.addEventListener('loadedmetadata',asignarDuracion);

	container = document.querySelector('#navigateTo');
	container.addEventListener('dragover',dragSobreContainer,false);
	container.addEventListener('dragleave',dragSalioContainer,false);
	container.addEventListener('drop',manejarDrop,false);
	var btns = document.getElementsByClassName('btn');
	for(i in btns){
		var btn = btns[i];
		if(typeof btn.style != "undefined"){
			btn.addEventListener('dragstart',dragIniciado,false);
			btn.addEventListener('dragend',dragFinalizado,false);
		}
		
	}
}
function ponerPlay(){
	video.play();
}
function asignarDuracion(){
	//progreso.max = video.duration;
	console.log(video.duration);
}
function ponerPausa(){
	video.pause();
}
function ponerStop(){
	video.pause();
	video.currentTime = 0;
}
function actualizarTiempo(){
	document.querySelector('#tiempo').innerHTML = video.currentTime;
	var valor = (video.currentTime * 100) / video.duration;
	console.log(valor);
	document.querySelector('#porcentaje').style.width = valor+'%';
}
function manejarVolumen(){
	video.volume = volumen.value;
}
function dragIniciado(e){
	elementoArrastrandose = this;
	return;
}
function manejarDrop(e){
	e.preventDefault();
	var c = document.getElementById('mainContainer');
	c.innerHTML = "";
	var ifr = makeFrame(elementoArrastrandose.dataset.curso);
	console.log(ifr);
	c.appendChild(ifr);
	this.classList.remove('over');
}
function dragSobreContainer(e){
	e.preventDefault();
	this.classList.add('over');
	return false;
}
function dragSalioContainer(e){
	this.classList.remove('over');
}
function dragFinalizado(e){
	return;
}
function makeFrame(atr) { 
	var ifrm;
	ifrm = document.createElement("iframe"); 
   	ifrm.setAttribute("src", atr); 
   	ifrm.classList.add('iframe')
   	return ifrm;
} 