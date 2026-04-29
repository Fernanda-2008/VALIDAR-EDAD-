function validarEdad() {

    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();

    let valido = true;

    // limpiar errores
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEdad").textContent = "";

    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "Ingresa tu nombre";
        valido = false;
    }

    if (edad === "") {
        document.getElementById("errorEdad").textContent = "Ingresa tu edad";
        valido = false;
    }

    let resultado = document.getElementById("resultado");

    if (valido) {

        if (edad >= 18) {
            resultado.className = "mayor";
            resultado.innerHTML = 🔴 ${nombre}, eres mayor de edad;
        } else {
            resultado.className = "menor";
            resultado.innerHTML = 🟢 ${nombre}, eres menor de edad;
        }

        resultado.style.display = "block";

    } else {
        resultado.style.display = "none";
    }
}
