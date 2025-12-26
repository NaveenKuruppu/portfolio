const reveals = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  for (let el of reveals) {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 50) {
      el.classList.add("active");
    }
  }
});
