/*
The "source" code is the code that we'll write and edit. 
The "distribution" code is the minimized and optimized output
 of our build process that will eventually be loaded in the browser
*/

import './style.css';
import HappyFace from './hf.png';

function component() {
  var element = document.createElement('div');
  element.innerHTML = (`<h2>Hello Webpack!</h2>`)
  element.classList.add('title');

  var hf = new Image();
  hf.src = HappyFace;
  element.appendChild(hf);

  return element;
}

document.body.appendChild(component());