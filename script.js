alert("JS conectado");
document.getElementById("btnValidar").addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value;

    let errorNombre = document.getElementById("errorNombre");
    let errorEdad = document.getElementById("errorEdad");
    let resultado = document.getElementById("resultado");

    // limpiar errores
    errorNombre.textContent = "";
    errorEdad.textContent = "";
    resultado.style.display = "none";

    let valido = true;

    if (nombre === "") {
        errorNombre.textContent = "Ingresa tu nombre";
        valido = false;
    }

    if (edad === "") {
        errorEdad.textContent = "Ingresa tu edad";
        valido = false;
    }

    if (valido) {
        edad = parseInt(edad);

        if (edad >= 18) {
            resultado.className = "mayor";
            resultado.innerHTML = 🔴 ${nombre}, eres mayor de edad;
        } else {
            resultado.className = "menor";
            resultado.innerHTML = 🟢 ${nombre}, eres menor de edad;
        }

        resultado.style.display = "block";
    }
});
