let input = document.getElementById('input');
let btn = document.getElementById('btn');
let img = document.getElementById('img');

btn.addEventListener('click', function () {
    if (input.value >= 300 && input.value <= 500) {
        img.setAttribute('src', 'img/car-1.png');
    }
    else if (input.value >= 500 && input.value <= 1500) {
        img.setAttribute('src', 'img/car-2.png');
    }
    else if (input.value >= 1500 && input.value <= 3000) {
        img.setAttribute('src', 'img/car-3.png');
    }
})