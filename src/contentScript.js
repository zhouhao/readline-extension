'use strict';
import './contentScript.css';

const body = document.querySelector('body');
const follower = document.createElement('div');
follower.id = 'shark-eagle-readline-bar';
body.appendChild(follower);

let clientX = 0;
let clientY = 0;

const updateReadBar = (event) => {
  // Offset the position to center the div on the cursor
  follower.style.left = '0';
  follower.style.top = event.pageY - follower.offsetHeight / 2 + 'px';
};

document.addEventListener('mousemove', (event) => {
  clientX = event.clientX;
  clientY = event.clientY;
  updateReadBar(event);
});

document.addEventListener('scroll', () => {
  const event = new MouseEvent('mousemove', {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: clientX,
    clientY: clientY,
  });
  document.dispatchEvent(event);
});
