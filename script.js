document.onmousemove = (event) => {
  const circle = document.createElement('div');
  circle.setAttribute('class', 'circle');
  document.body.appendChild(circle);
  circle.style.left = (event.clientX - 55) + 'px';
  circle.style.top = (event.clientY - 55) + 'px';
  circle.classList.add('fade-out');
}