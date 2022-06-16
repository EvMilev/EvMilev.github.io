// js for index2 - projects html

let targetJSProjects = document.querySelector('.js-projects');
let targetHtmlProjects = document.querySelector('.html-projects');


function biggerCircleJS () {
    targetJSProjects.style.transform = 'scale(1.2,1.2)';
};

function smallerCircleJS () {
    targetJSProjects.style.transform = 'scale(1,1)'
};

targetJSProjects.addEventListener('mouseover', biggerCircleJS);
targetJSProjects.addEventListener('mouseout', smallerCircleJS);


function biggerCircleHTML () {
    targetHtmlProjects.style.transform = 'scale(1.2,1.2)';
};

function smallerCircleHTML () {
    targetHtmlProjects.style.transform = 'scale(1,1)';
};

targetHtmlProjects.addEventListener('mouseover', biggerCircleHTML);
targetHtmlProjects.addEventListener('mouseout', smallerCircleHTML);