let contador = 0;

function AgregarTexto() {
  let texto = document.getElementById("texto").value;
  if (!texto =="") {
      let lista = document.getElementById("lista");
      let agregar = document.createElement("div");
      agregar.id = "div-" + contador;
      contador += 1;
      agregar.innerHTML = texto + "<button style='margin:0 ;' onclick='BorrarDiv(\"" + agregar.id + "\")'>Realizado</button>";
      lista.appendChild(agregar);
    }
    GuardarListaEnLocalStorage();

  }

function BorrarDiv(idDiv) {
  let Divcreado = document.getElementById(idDiv);
  Divcreado.remove();
  GuardarListaEnLocalStorage();

}


function GuardarListaEnLocalStorage() {
  let lista = document.getElementById("lista");
  localStorage.setItem("listaTareas", lista.innerHTML);
}
window.addEventListener("DOMContentLoaded", function() {
  let lista = document.getElementById("lista");
  let listaGuardada = localStorage.getItem("listaTareas");
  if (listaGuardada) {
    lista.innerHTML = listaGuardada;
  }
});