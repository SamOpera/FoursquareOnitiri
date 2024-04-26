// script.js
document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          const content = this.nextElementSibling;
          content.classList.toggle("active");
      });
  });
});
