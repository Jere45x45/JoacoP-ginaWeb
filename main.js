let nombre = document.getElementById("producto");
let precio = document.getElementById("precio");
let botón = document.getElementById("agregar");
let div = document.getElementById("div");

function agregardiv() {
    let b = nombre.value;
    let c = precio.value;

    if (!b || !c) {
        alert("Por favor, completa ambos campos.");
        return;
    }

    let productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    let a = document.createElement("h1");
    let h1 = document.createElement("h2");

    a.textContent = b;
    h1.textContent = "$" + c;

    productoDiv.appendChild(a);
    productoDiv.appendChild(h1);

    div.appendChild(productoDiv);

    nombre.value = "";
    precio.value = "";
}

botón.addEventListener("click", agregardiv);