console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage();
});

function calculateScrollPercentage() {
  const scrollPercentage =
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100 +
    "%";
  return scrollPercentage;
}
