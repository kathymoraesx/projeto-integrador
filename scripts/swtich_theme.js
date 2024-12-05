document.addEventListener("DOMContentLoaded", () => {
    const theme_switch = document.getElementById("switch-theme");
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const logo = document.getElementById("image-logo");
  
    // Caminhos das imagens
    const logoLight = "logoborboleta.png"; // Nome da imagem Light Mode
    const logoDark = "darkmode.png";      // Nome da imagem Dark Mode
  
    theme_switch.addEventListener("click", () => {
      // Alterna os ícones de sol e lua
      sun.style.display = sun.style.display === "none" ? "block" : "none";
      moon.style.display = moon.style.display === "none" ? "block" : "none";
  
      // Alterna o logo com base no tema
      logo.src = logo.src.includes(logoLight) ? "/imagens esmaltes/" + logoDark : "/imagens esmaltes/" + logoLight;
    });
  });