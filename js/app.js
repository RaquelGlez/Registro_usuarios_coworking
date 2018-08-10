const nameVisitDom = document.getElementById('name-Visit');
const emailVisitDom = document.getElementById('email-Visit');
const companyVisitDom = document.getElementById('company-Visit');
const personVisitDom = document.getElementById('person-Visit');
const btnSend = document.getElementById('btn-Send');

// Función para obtener fecha
const dateRegistry = () => {
  let dateFormat = new Date();
  let day = dateFormat.getUTCDate();
  let month = dateFormat.getMonth() + 1;
  let year = dateFormat.getFullYear();
  return day = day + '/' + month + '/' + year;
};

// Función para obtener hora
const timeRegistry = () => {
  let timeFormat = new Date();
  let hours = timeFormat.getHours();
  let minutes = timeFormat.getMinutes();
  return hours + ':' + minutes;
};

const nameVisit = () => {
  let name = nameVisitDom.value;
  console.log(name)
  return name;
};


const emailVisit = () => {
  let email = emailVisitDom.value;
  console.log(email);
  return email;
};

const companyVisit = () => {
  let company = companyVisitDom.value;
  console.log(company)
  return company;
};

const personVisit = () => {
  let personVisit = personVisitDom.value;
  console.log(personVisit);
  return personVisit;
}

// Registro de Visitantes
btnSend.addEventListener('click', element => {
  firebase.database().ref('visit').push();
  let visitNew = firebase.database().ref('visit').push();
  console.log(visitNew);
  let keyVisit = visitNew.getKey();
  console.log(keyVisit);
  firebase.database().ref(`visit/${keyVisit}`).set({
    name: nameVisit(),
    email: emailVisit(),
    company: companyVisit(),
    person: personVisit(),
    date: dateRegistry(),
    time: timeRegistry()
  });
  window.location.assign('camera.html');
});
