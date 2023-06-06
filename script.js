"use strict";

let radius = 240;
const autoRotate = true;
const rotateSpeed = -60;
const imgWidth = 120;
const imgHeight = 170;

setTimeout(init, 1000);

const spinner = document.getElementById('spin-container');
const myImage = spinner.getElementsByTagName('img');
const myVideo = spinner.getElementsByTagName('video');

const myElement = [...myImage, ...myVideo];

spinner.style.width = `${imgWidth}px`;
spinner.style.height = `${imgHeight}px`;

const ground = document.getElementById('ground');
ground.style.width = `${radius * 3}px`;
ground.style.height = `${radius * 3}px`;

function init(delayTime) {
    myElement.forEach((ele, i) => {
        ele.style.transform = `rotateY(${i * (360 / myElement.length)}deg) translateZ(${radius}px)`;
        ele.style.transition = "transform 1s";
        ele.style.transitionDelay = `${delayTime || (myElement.length - i) / 4}s`;
    });
}


// auto spin
if (autoRotate) {
    const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
    spinner.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}
