// Archivo JavaScript para la funcionalidad de la tienda de ropa

// Función para manejar la búsqueda
function handleSearch() {
    const searchInput = document.getElementById('search-input').value;
    alert('Buscando: ' + searchInput);
}

// Función para manejar el clic en los botones
function handleButtonClick(buttonName) {
    alert('Has hecho clic en: ' + buttonName);
}

// Agregar event listeners a los botones
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    searchButton.addEventListener('click', handleSearch);
    button1.addEventListener('click', () => handleButtonClick('Botón 1'));
    button2.addEventListener('click', () => handleButtonClick('Botón 2'));
    button3.addEventListener('click', () => handleButtonClick('Botón 3'));
});
