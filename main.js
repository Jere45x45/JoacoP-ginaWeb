let nombre = document.getElementById("nombre");
let precio = document.getElementById("precio");
let botón = document.getElementById("botón");
let div = document.getElementById("div");
let imagen = document.getElementById("imagen");

function agregardiv() {
    let b = nombre.value.trim();
    let c = precio.value.trim();
    let file = imagen.files[0];

    if (!b || !c) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        let productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        let textoDiv = document.createElement("div");
        textoDiv.classList.add("texto");

        let titulo = document.createElement("h1");
        titulo.textContent = b;

        let precioTag = document.createElement("h2");
        precioTag.textContent = "$" + c;

        textoDiv.appendChild(titulo);
        textoDiv.appendChild(precioTag);

        let img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Imagen del producto";
        img.classList.add("imagen-producto");

        productoDiv.appendChild(textoDiv);
        productoDiv.appendChild(img);
        div.appendChild(productoDiv);

        nombre.value = "";
        precio.value = "";
        imagen.value = "";
    };

    reader.readAsDataURL(file);
}

botón.addEventListener("click", agregardiv);