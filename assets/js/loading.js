// Variables
const loading = document.getElementById('loading');

// Event listeners
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', cargarLoading);
    setTimeout(()=>{
        document.querySelector('.loader').classList.toggle('loader2');
    },1500)
}


// Funciones
function cargarLoading(){
    const logo = document.createElement('div');
    logo.classList.add('logo')
    const imgLogo = document.createElement('img');
    imgLogo.src = '/assets/images/logo.svg'
    logo.appendChild(imgLogo)
    loading.appendChild(logo);

    const fruits = document.createElement('div');
    fruits.classList.add('fruits')
    const imgFruit = document.createElement('img');
    imgFruit.src = '/assets/images/fruits.svg'
    fruits.appendChild(imgFruit)
    loading.appendChild(fruits);
}