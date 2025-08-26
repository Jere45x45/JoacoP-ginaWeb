let nombre = document.getElementById("producto");
let precio = document.getElementById("precio");
let boton = document.getElementById("agregar");
let div = document.getElementById("div");

function incrementar(cantidadNum) {
    cantidadNum.textContent = parseInt(cantidadNum.textContent) + 1;
}

function decrementar(cantidadNum) {
    let valor = parseInt(cantidadNum.textContent);
    if (valor > 0) {
        cantidadNum.textContent = valor - 1;
    }
}

function agregardiv() {
    let b = nombre.value;
    let c = precio.value;

    if (!b || !c) {
        alert("Por favor, completa producto y precio.");
        return;
    }

    let productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    let nombreEl = document.createElement("div");
    nombreEl.textContent = b;

    let precioEl = document.createElement("div");
    precioEl.textContent = "$" + c;

    let cantidadDiv = document.createElement("div");
    cantidadDiv.classList.add("cantidad");

    let cantidadNum = document.createElement("span");
    cantidadNum.textContent = 0;

    let btnMenos = document.createElement("button");
    btnMenos.textContent = "-";
    btnMenos.classList.add("btn");

    let btnMas = document.createElement("button");
    btnMas.textContent = "+";
    btnMas.classList.add("btn", "mas");

    btnMas.addEventListener("click", () => incrementar(cantidadNum));
    btnMenos.addEventListener("click", () => decrementar(cantidadNum));

    cantidadDiv.appendChild(btnMenos);
    cantidadDiv.appendChild(cantidadNum);
    cantidadDiv.appendChild(btnMas);

    productoDiv.appendChild(nombreEl);
    productoDiv.appendChild(precioEl);
    productoDiv.appendChild(cantidadDiv);

    div.appendChild(productoDiv);

    nombre.value = "";
    precio.value = "";
}

boton.addEventListener("click", agregardiv);
