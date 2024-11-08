'use strict';
import './contentScript.css';

const body = document.querySelector('body');
const follower = document.createElement('div');
follower.id = 'follower';
body.appendChild(follower);

document.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;

  // Offset the position to center the div on the cursor
  follower.style.left = '0';
  follower.style.top = y - follower.offsetHeight / 2 + 'px';
});
