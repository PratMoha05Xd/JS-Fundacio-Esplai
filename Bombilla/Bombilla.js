// Obtenemos las referencias a las imágenes
const offImage = document.getElementById('offImage');
const onImage = document.getElementById('onImage');
const boffImage = document.getElementById('boffImage');
const bonImage = document.getElementById('bonImage');

// Ocultamos las imágenes "On" y "bon" al principio
onImage.style.display = 'none';
bonImage.style.display = 'none';

// Agregamos el evento clic a la imagen "boff"
boffImage.addEventListener('click', function() {
  // Cambiamos la visibilidad de las imágenes
  offImage.style.display = 'none';
  onImage.style.display = 'block';
  boffImage.style.display = 'none';
  bonImage.style.display = 'block';
});

// Agregamos el evento clic a la imagen "bon"
bonImage.addEventListener('click', function() {
  // Cambiamos la visibilidad de las imágenes
  offImage.style.display = 'block';
  onImage.style.display = 'none';
  boffImage.style.display = 'block';
  bonImage.style.display = 'none';
});

