document.addEventListener('DOMContentLoaded', function() {
    const tarjetas = document.querySelectorAll('[id^="tarjeta"]');
  
    tarjetas.forEach(tarjeta => {
      tarjeta.addEventListener('click', function() {
        let idTarjeta = tarjeta.id; 
        let numero = idTarjeta.replace('tarjeta', '');
        let idTrabajos = 'trabajos' + numero;
        let divTrabajos = document.getElementById(idTrabajos);
  
        // Ocultar los demás divs
        document.querySelectorAll('[id^="trabajos"]').forEach(div => {
          if(div.id !== idTrabajos) {
            div.classList.remove('visible');
          }
        });
  
        // Alternar la clase 'visible' para mostrar/ocultar con transición
        if(divTrabajos) {
          divTrabajos.classList.toggle('visible');
        }
      });
    });
  });