const header = document.querySelector('h1');
const btn = document.querySelector('button');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeColor() {
	var rval = getRandomInt(256);
	var gval = getRandomInt(256);
	var bval = getRandomInt(256);

	document.body.style.backgroundColor = `rgb(${rval}, ${gval}, ${bval})`;
	header.innerHTML = `rgb(${rval}, ${gval}, ${bval})`;
}

btn.addEventListener('click', changeColor);