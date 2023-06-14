let contador = 0;

function AgregarTexto() {
  let texto = document.getElementById("texto").value;
  if (!texto =="") {
      let lista = document.getElementById("lista");
      let agregar = document.createElement("div");
      agregar.id = "div-" + contador;
      contador += 1;
      agregar.innerHTML = texto + "<button onclick='BorrarDiv(\"" + agregar.id + "\")'>Realizado</button>";
      lista.appendChild(agregar);
    }
    
  }

function BorrarDiv(idDiv) {
  let Divcreado = document.getElementById(idDiv);
  Divcreado.remove();
}
