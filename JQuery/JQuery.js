// Alert de Hola
/*$(document).ready(function() {
    alert('Hola');
});

// hay la posibilidad de cambiar funcion con () => y funciona igual
$(document).ready(() => {
    alert('Hola');
});*/

// hadi mas sencilla aun
/*$().ready(() => {
    alert('Hola Mundo');
});*/

/*Mediante a jQuery haz un botón que mediante a un
toggle que cambie el texto de un párrafo al color rojo.*/


/*JAVA SCRIPT*/
/*const btn = document.getElementById('butt1');
btn.onclick = function () {
    const parrafos = document.querySelectorAll('.parr');
    if(parrafos.length != 0)  {
        parrafos[0].style.color = 'red';
    }
}*/

/*JQUERY*/
$(document).ready(function() {
    $('#butt1').click(function() {
      const parrafos = $('.parr');
      if (parrafos.length != 0) {
        parrafos.first().css('color', 'red');
      }
    });
  });
  