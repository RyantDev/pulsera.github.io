const tamanioSelect = document.getElementById('tamanio');
const colorSelect = document.getElementById('color');
const cantidadSelect = document.getElementById('cantidad');

function actualizarVistaPrevia() {
    const tamanio = tamanioSelect.value;
    const color = colorSelect.value;
    const cantidad = cantidadSelect.value;

    //esto actualiza el tamaño y color y cantidad de los balines
for (let i = 1; i <= 5; i++) {
    if (cantidad >= i) {
        actualizarElemento(`balin${i}`, 150, 150, 80, (i * 360) / 5, tamanio, color);
    } else {
        ocultarElemento(`balin${i}`);
    }
    }

    // Mostrar la cantidad seleccionada en la consola para prueba
    console.log(`Cantidad de balines seleccionada: ${cantidad}`);
    console.log(`Cantidad de balines seleccionada: ${color}`);
}

function actualizarElemento(id, cx, cy, r, angulo, tamanio, color) {
    const elemento = document.getElementById(id);
    const radianes = (angulo * Math.PI) / 180;

    const x = cx + r * Math.cos(radianes) - tamanio / 2;
    const y = cy + r * Math.sin(radianes) - tamanio / 2;

    elemento.setAttribute('href', `imagenes/balin_${color}.png`);

    elemento.setAttribute('x', x);
    elemento.setAttribute('y', y);
    elemento.setAttribute('width', tamanio);
    elemento.setAttribute('height', tamanio);
    elemento.setAttribute('opacity', '1'); // Ajustar la opacidad si es necesario

    elemento.classList.remove('oculto');
    
}

function ocultarElemento(id) {
    const elemento = document.getElementById(id);
    elemento.setAttribute('opacity', '0'); // Oculta el elemento cambiando la opacidad (cver como eliminarlo en vez de bajarle la opacidad para mejor rendimiento)
    elemento.classList.add('oculto');
}