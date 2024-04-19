function toggleTheme() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
  }
  
var toggleButton = document.getElementById("toggleButton");
toggleButton.onclick = toggleTheme;
