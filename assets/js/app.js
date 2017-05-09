var imagenes = document.getElementsByClassName ("imgContainer");

for (var i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click",ocultar);
}

function ocultar() {
  this.style.display = "none";

}
