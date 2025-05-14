document.addEventListener("DOMContentLoaded", function () {
    fetch("/comu/navbar.html")
      .then(response => response.text())
      .then(data => {
        const container = document.getElementById("navbar-comu");
        container.innerHTML = data;
  
        // Cargar el script de búsqueda una vez insertado el navbar
        const script = document.createElement("script");
        script.src = "/comu/busqueda.js";
        script.defer = true;
        document.body.appendChild(script);
      })
      .catch(error => {
        console.error("Error al cargar navbar:", error);
      });
  });
  


document.addEventListener('DOMContentLoaded', () => {
    fetch('/comu/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-comu').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar navbar:', error);
        });
});