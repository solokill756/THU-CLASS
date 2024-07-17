const btnradio1 = document.querySelector('#btnradio1');
const btnradio2 = document.querySelector('#btnradio2');

btnradio1.addEventListener('click', function() {
    document.querySelector('#imageInput').classList.remove('d-none');
    document.querySelector('#fileInput').classList.add('d-none');
})

btnradio2.addEventListener('click', function() {
    document.querySelector('#imageInput').classList.add('d-none');
    document.querySelector('#fileInput').classList.remove('d-none');
})