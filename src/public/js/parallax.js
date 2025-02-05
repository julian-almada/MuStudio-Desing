window.onscroll = function(){
    let posicion = window.pageYOffset || document.documentElement.scrollTop;

    let elemento1 = document.getElementById('icon_fondo');
    let elemento2 = document.getElementById('texto');

    elemento2.style.bottom = posicion * 0.1 + 'px';

    elemento1.style.bottom = posicion * 0.1 - 'px';
}