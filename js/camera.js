const player = document.getElementById('player');
const snapshotCanvas = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');
let videoTracks;


const handleSuccess = (stream) => {
// Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};


captureButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);
  let dato = snapshotCanvas.toDataURL();
  console.log(dato);
  let refData = firebase.storage().ref();
  let getImagen = refData.child('images');
  console.log(getImagen);
  getImagen.putString(dato,'data_url').then(function(snapshot) {
    console.log('Uploaded a data_url string!');
  })
  // Stop all video streams.
  videoTracks.forEach(function(track) {track.stop()});
  // location.href = 'views/photo.html';
});

navigator.mediaDevices.getUserMedia({video: true})
  .then(handleSuccess);
