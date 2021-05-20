document.onmousemove = (event) => {
  const size = 100, borderSize = 10;
  const circle = document.createElement('div');
  circle.setAttribute('class', 'circle');
  document.body.appendChild(circle);
  circle.style.left = (event.clientX - size/2 + borderSize/2) + 'px';
  circle.style.top = (event.clientY - size/2 + borderSize/2) + 'px';
  circle.classList.add('fade-out');
  circle.addEventListener('animationend', (e) => circle.remove());
}