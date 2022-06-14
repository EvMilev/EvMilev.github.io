// js for index2 - projects html

let targetJSProjects = document.querySelector('.js-projects');
let targetJSProjectsText = document.querySelector('.projects-text');
let targetHtmlProjects = document.querySelector('.html-projects');
let targetHtmlProjectsText = document.querySelector('.html-projects-text');

function biggerCircleJS () {
    targetJSProjects.style.width = '30rem';
    targetJSProjects.style.height = '30rem';
    targetJSProjectsText.style.fontSize = '1.4rem';
};

function smallerCircleJS () {
    targetJSProjects.style.width = '25rem';
    targetJSProjects.style.height = '25rem';
    targetJSProjectsText.style.fontSize = '1rem';
};

targetJSProjects.addEventListener('mouseover', biggerCircleJS);
targetJSProjects.addEventListener('mouseout', smallerCircleJS);


function biggerCircleHTML () {
    targetHtmlProjects.style.width = '35rem';
    targetHtmlProjects.style.height = '35rem';
    targetHtmlProjectsText.style.fontSize = '1.4rem';
};

function smallerCircleHTML () {
    targetHtmlProjects.style.width = '25rem';
    targetHtmlProjects.style.height = '25rem';
    targetHtmlProjectsText.style.fontSize = '1rem';
};

targetHtmlProjects.addEventListener('mouseover', biggerCircleHTML);
targetHtmlProjects.addEventListener('mouseout', smallerCircleHTML);