/* const selectCompany = document.getElementById('infoCompany');

// Función para traer data de la empresa
database.ref('Empresas').on('value', function(snapshot) {
  selectCompany.innerHTML = '';
  snapshot.forEach(function(element) {
    let data = element.val();
    console.log(data);
    if (data !== null) {
      selectCompany.innerHTML += `
      <div class="input-group-prepend">
      <label class="input-group-text" for="person-Visit">A quién visita:</label>
  </div>
  <select class="custom-select" id="person-Visit">
      <option selected>Seleccione un nombre</option>
      <option>${data.Nombre}</option>
  </select>
     `;
    }
  });
});
*/  