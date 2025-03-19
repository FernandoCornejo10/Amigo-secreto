let amigos = []; // Lista de amigos

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de texto
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 participantes para el sorteo.");
        return;
    }

    let copiaAmigos = [...amigos];
    let resultado = [];

    amigos.forEach(amigo => {
        let opciones = copiaAmigos.filter(a => a !== amigo);
        if (opciones.length === 0) {
            alert("No se puede realizar el sorteo. Inténtalo de nuevo.");
            return;
        }
        let elegido = opciones[Math.floor(Math.random() * opciones.length)];
        resultado.push(`${amigo} → ${elegido}`);
        copiaAmigos = copiaAmigos.filter(a => a !== elegido);
    });

    mostrarResultados(resultado);
}

function mostrarResultados(resultado) {
    const listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = "";

    resultado.forEach(pair => {
        const li = document.createElement("li");
        li.textContent = pair;
        listaResultados.appendChild(li);
    });
}