document.querySelectorAll('.trabajo').forEach(trabajo => {
    trabajo.addEventListener('click', function () {
        if (this.classList.contains('expandido')) {
            this.classList.remove('expandido'); // Si ya está expandido, se cierra
        } else {
            document.querySelectorAll('.trabajo').forEach(t => t.classList.remove('expandido')); // Cierra otros
            this.classList.add('expandido'); // Expande el seleccionado
        }
    });
});

function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}