//Funcion para ocultar imagenes
var imagenes = document.getElementsByClassName ("imgContainer");

for (var i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click",ocultar);
}

function ocultar() {
  this.style.display = "none";
}


//Funcion para ocultar/mostrar texto
var txtIzq = document.getElementById('izquierda');
var txtDer = document.getElementById('derecha');
var botonOrigen = document.getElementById('origen');
var botonExtincion = document.getElementById('extincion');

//Esta funcion cuenta los clicks que serán comparados despues saber qué hará el texto
var clicks = 0;
function onClick() {
    clicks += 1;
}
botonOrigen.addEventListener("click", onClick);
botonExtincion.addEventListener("click", onClick);

//Funcion para ocultar/mostar texto lado izquierdo
botonOrigen.addEventListener("click", removerIzq);

function removerIzq () {
  if (clicks % 2 != 0) {
    txtIzq.style.visibility = "hidden";
  } else if (clicks % 2 == 0) {
    txtIzq.style.visibility = "visible";
  }
}

//Funcion para ocultar/mostar texto lado izquierdo
botonExtincion.addEventListener("click", removerDer);

function removerDer () {
  if (clicks % 2 != 0) {
    txtDer.style.visibility = "hidden";
  } else if (clicks % 2 == 0) {
    txtDer.style.visibility = "visible";
  }
}
