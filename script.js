// Copyright (c) 2023 Carlos Daniel Marin Toro - Todos los derechos reservados
function mostrarAlerta() {
    alert("¡Gracias por tu compra! Tu NFT se ha añadido al carrito.");
}

document.addEventListener("DOMContentLoaded", function() {
    // JavaScript para cambiar la visibilidad del contenido principal y ocultar la descripción cuando se hace clic en los enlaces.
    document.getElementById("enlace-animales").addEventListener("click", function() {
        document.getElementById("animales-mecanicos").checked = true;
        document.getElementById("ciudades-inteligentes").checked = false;
        document.getElementById("paisajes-naturales").checked = false;
        document.querySelector("main").style.display = "block"; // Muestra el contenido principal
        document.getElementById("descripcion-tienda").style.display = "none"; // Oculta la descripción
    });

    document.getElementById("enlace-ciudades").addEventListener("click", function() {
        document.getElementById("animales-mecanicos").checked = false;
        document.getElementById("ciudades-inteligentes").checked = true;
        document.getElementById("paisajes-naturales").checked = false;
        document.querySelector("main").style.display = "block"; // Muestra el contenido principal
        document.getElementById("descripcion-tienda").style.display = "none"; // Oculta la descripción
    });

    document.getElementById("enlace-paisajes").addEventListener("click", function() {
        document.getElementById("animales-mecanicos").checked = false;
        document.getElementById("ciudades-inteligentes").checked = false;
        document.getElementById("paisajes-naturales").checked = true;
        document.querySelector("main").style.display = "block"; // Muestra el contenido principal
        document.getElementById("descripcion-tienda").style.display = "none"; // Oculta la descripción
    });
});
