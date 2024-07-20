const buscador = document.querySelector('.buscador');
const tabla = document.querySelector('tbody');

buscador.addEventListener('keyup', (event) => {
  const adaptar = event.target.value.toLowerCase();
  const filas = tabla.querySelectorAll('tr');

  for (const row of filas) {
    const registro = row.querySelectorAll('td');
    let verFilas = false;

 
    for (let i = 1; i < 3; i++) {
      if (i < registro.length) { 
        const adaptar2 = registro[i].textContent.toLowerCase();
        if (adaptar2.includes(adaptar)) {
          verFilas = true;
          break; 
        }
      }
    }
    row.style.display = verFilas ? '' : 'none'; 
  }
});
