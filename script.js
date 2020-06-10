// create a button
// write function that changes screen
// target the screen
let screen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('li');

let currentText = '';

function addAllListeners(param){
    for(let i = 0; i < param.length; i++){
        param[i].addEventListener('click', change);
    }
}

addAllListeners(allButtonArray);

function change(param){
    if( param === undefined ){
        screen.innerHTML = 'Do Math';
    } else {
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }
}