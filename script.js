function touchEnabled() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

const moveEvent = touchEnabled() ? 'ontouchmove' : 'onmousemove';

document[moveEvent] = (event) => {
  const size = 100, borderSize = 10;
  const circle = document.createElement('div');
  circle.setAttribute('class', 'circle');
  document.body.appendChild(circle);
  const evt = touchEnabled() ? event.touches[0] : event;
  circle.style.left = (evt.clientX - 48) + 'px';
  circle.style.top = (evt.clientY - 90) + 'px';
  circle.style.left = (event.clientX - size/2 - borderSize/2) + 'px';
  circle.style.top = (event.clientY - size/2 - borderSize/2) + 'px';
  circle.classList.add('fade-out');
  circle.addEventListener('animationend', (e) => circle.remove());
}