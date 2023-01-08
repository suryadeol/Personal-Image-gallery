let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('click', () => {
    img.src = 'images/rain.jpg';
})

btn2.addEventListener('click', () => {
    img.src = 'images/moon.jpg';
})

btn3.addEventListener('click', () => {
    img.src = 'images/water.jpg';
})

btn4.addEventListener('click', () => {
    img.src = 'images/rainbow.jpg';
})