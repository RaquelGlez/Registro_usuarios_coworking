const nameVisitDom = document.getElementById('name-Visit');
const emailVisitDom = document.getElementById('email-Visit');
const companyVisitDom = document.getElementById('company-Visit');
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
  return nameVisitDom.value;
};


const emailVisit = () => {
  return emailVisitDom.value;
};

const companyVisit = () => {
  return companyVisitDom.value;
};

// Registro de Visitantes
btnSend.addEventListener('click', element => {
  firebase.database().ref('visit').push();
  let visitNew = firebase.database().ref('post').push();
  console.log(visitNew);
  let keyVisit = visitNew.getKey();
  console.log(keyVisit);
  firebase.database().ref(`visit/${keyVisit}`).set({
    name: nameVisit(),
    email: emailVisit(),
    company: companyVisit(),
    date: dateRegistry(),
    time: timeRegistry()
  });
});
