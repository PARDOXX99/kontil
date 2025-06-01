document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading");
  const content = document.getElementById("content");

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      content.style.display = "block";
    }, 1000);
  }, 5000); // 5 detik durasi loading
});
