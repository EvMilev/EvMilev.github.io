// js for projects.html - projects html

let targetJSProjects = document.querySelector('.js-projects');
let targetHtmlProjects = document.querySelector('.html-projects');


function biggerCircleJS () {
    targetJSProjects.style.transform = 'scale(1.2,1.2)';
};

function smallerCircleJS () {
    targetJSProjects.style.transform = 'scale(1,1)'
};

function biggerCircleHTML () {
    targetHtmlProjects.style.transform = 'scale(1.2,1.2)';
};

function smallerCircleHTML () {
    targetHtmlProjects.style.transform = 'scale(1,1)';
};


// image changing size and color by mouseover mouseout

let targetPic = document.querySelector('.picture')

function normalPicture () {
    targetPic.style.backgroundBlendMode ='normal'
    targetPic.style.transform = 'scale(1.2,1.2)';
}

function luminosityPicture () {
    targetPic.style.backgroundBlendMode ='luminosity'
    targetPic.style.transform = 'scale(1,1)';
}



function desctopScreensJS () {
    targetJSProjects.addEventListener('mouseover', biggerCircleJS);
    targetJSProjects.addEventListener('mouseout', smallerCircleJS);
    
    targetHtmlProjects.addEventListener('mouseover', biggerCircleHTML);
    targetHtmlProjects.addEventListener('mouseout',     smallerCircleHTML);

    targetPic.addEventListener ('mouseover',normalPicture)
    targetPic.addEventListener ('mouseout',luminosityPicture);
}

function mobileScreensJS () {
    targetJSProjects.removeEventListener('mouseover', biggerCircleJS);
    targetJSProjects.removeEventListener('mouseout', smallerCircleJS);
    
    targetHtmlProjects.removeEventListener('mouseover', biggerCircleHTML);
    targetHtmlProjects.removeEventListener('mouseout',     smallerCircleHTML);

    targetPic.removeEventListener ('mouseover',normalPicture)
    targetPic.removeEventListener ('mouseout',luminosityPicture);
}

function projectsWindowCheck (){
    if (window.innerWidth > 430) {
        desctopScreensJS ()
    }
    else {
        mobileScreensJS()
    }
}

projectsWindowCheck ()
window.addEventListener('resize', projectsWindowCheck);