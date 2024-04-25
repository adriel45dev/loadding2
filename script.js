window.addEventListener("load", function () {
  showContent();
});

window.addEventListener("pageshow", function () {
  hideContent(showContent);
});

function showContent() {
  const content = document.body;
  const progress = document.querySelector(".progress");

  // Simular o carregamento
  var width = 0;
  var loadingInterval = setInterval(function () {
    if (width >= 100) {
      clearInterval(loadingInterval);
      progress.style.width = "100%";
      content.classList.add("show");
    } else {
      width += 10;
      progress.style.width = width + "%";
    }
  }, 50);
}

function hideContent(callback) {
  const content = document.body;
  const progress = document.querySelector(".progress");

  content.classList.remove("show");
  progress.style.width = "0%";
  setTimeout(callback, 500);
}
