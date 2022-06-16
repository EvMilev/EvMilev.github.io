
let targetCircle = document.querySelector('.circle-name');
let targetFontSize = document.querySelector('.name-and-text')


function biggerCircle () {
    targetCircle.style.transform = 'scale(1.2,1.2)';
    // targetFontSize.style.fontSize = '1rem';
};

function smallerCircle () {
    targetCircle.style.transform = 'scale(1,1)';
    targetFontSize.style.fontSize = '1rem';
};

let targetImg = document.querySelector('.picture')

function normalImage () {
    targetImg.style.backgroundBlendMode ='normal'
    targetImg.style.transform = 'scale(1.2,1.2)';
}

function luminositylImage () {
    targetImg.style.backgroundBlendMode ='luminosity'
    targetImg.style.transform = 'scale(1,1)';
}

//targetCircle.onmouseover = function() {biggerCircle()}
// targetCircle.onmouseout = function() {smallerCircle()}

targetCircle.addEventListener('mouseover', biggerCircle);
targetCircle.addEventListener('mouseout', smallerCircle);

targetImg.addEventListener ('mouseover', normalImage)

targetImg.addEventListener ('mouseout',luminositylImage)



