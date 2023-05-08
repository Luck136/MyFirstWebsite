const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX - circle.offsetWidth / 2;
  const y = e.clientY - circle.offsetHeight / 2;

  circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
