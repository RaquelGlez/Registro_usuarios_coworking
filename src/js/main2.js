const infoVisit = document.getElementById('info-Visit');
const infoCompany = document.getElementById('info-Company');

// Traer información de los visitantes
database.ref('visit').on('child_added', function(snapshot) {
  let data = snapshot.val();
  infoVisit.innerHTML += `
  <tr>
  <th scope="row">${data.name}</th>
  <td>${data.company}</td>
  <td>${data.date}</td>
  <td>${data.time}</td>
</tr>
`;
});

// Traer información de las empresas
database.ref('company').on('value', function(snapshot) {
  let data = Object.keys(snapshot.val());
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    database.ref(`company/${data[i]}`).on('child_added', function(val) {
      let dataCompany = val.val();
      infoCompany.innerHTML += `
      <tr>
        <th scope="row">${data[i]}</th>
        <td>${dataCompany.employee}</td>
        <td>${dataCompany.email}</td>
        <td> <a href="#" class="danger-text" onclick="deleteEmployee('${dataCompany.keyEmployee}')"><i class="far fa-trash-alt fa-xs icon"></i> Borrar</a>
        </td>
        <td></td>
      </tr>
      `;
    });
  }
});
