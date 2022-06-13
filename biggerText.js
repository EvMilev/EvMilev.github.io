
let targetCircle = document.querySelector('.circle-name');
let targetFontSize = document.querySelector('.name-and-text')

function biggerCircle () {
    targetCircle.style.width = '40rem';
    targetCircle.style.height = '40rem';
    targetFontSize.style.fontSize = '1.1rem';
};

function smallerCircle () {
    targetCircle.style.width = '35rem'
    targetCircle.style.height = '35rem'
    targetFontSize.style.fontSize = '1rem'
};


// targetCircle.onmouseover = function() {biggerCircle()}
// targetCircle.onmouseout = function() {smallerCircle()}


targetCircle.addEventListener('mouseover', biggerCircle);
targetCircle.addEventListener('mouseout', smallerCircle);



