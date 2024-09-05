const agregar = document.getElementById('agregar');
const texto = document.getElementById('item');
const limpiar = document.getElementById('limpiar');
const itemList = document.getElementById('contenedor');
loadList();

agregar.addEventListener('click', () => {
    const texto = item.value.trim();
    if (texto) {
        addItem(texto);
        item.value = '';
    }
});

limpiar.addEventListener('click', () => {
    localStorage.removeItem('items');
    updateView([]);
});

function addItem(item) {
    const items = getItems();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    updateView(items);
    }
    function getItems() {
        const items = localStorage.getItem('items');
        return items ? JSON.parse(items) : [];
    }
function loadList() {
        const items = getItems();
        updateView(items);
    }
    function updateView(items) {
        itemList.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemList.appendChild(li);
    });
}
