// js for index.html 
// circle changing color by mouseover mouseout

let targetCircle = document.querySelector('.circle-name');
let targetFontSize = document.querySelector('.name-and-text')


function biggerCircle () {
    targetCircle.style.transform = 'scale(1.2,1.2)';
};

function smallerCircle () {
    targetCircle.style.transform = 'scale(1,1)';
    targetFontSize.style.fontSize = '1rem';
};


// image changing size and color by mouseover mouseout

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

function desktopDevices () {
    targetCircle.addEventListener ('mouseover',biggerCircle)
    targetCircle.addEventListener ('mouseout',smallerCircle);
    targetImg.addEventListener ('mouseover', normalImage)
    targetImg.addEventListener ('mouseout',luminositylImage);
}

function mobileDevices () {
    targetCircle.removeEventListener ('mouseover',biggerCircle);
    targetCircle.removeEventListener ('mouseout',smallerCircle);
    targetImg.removeEventListener ('mouseover', normalImage)
    targetImg.removeEventListener ('mouseout',luminositylImage);
}

function windowCheck (){
    if (window.innerWidth < 430 || window.innerHeight < 420) {
        mobileDevices ()
    }
    else {
        desktopDevices()
    }
}

windowCheck ()
window.addEventListener('resize', windowCheck)




