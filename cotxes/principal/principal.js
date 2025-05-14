document.addEventListener("DOMContentLoaded", () => {
    fetch("/cotxes/cotxes.json")
      .then(res => res.json())
      .then(cotxes => {
        const container = document.getElementById("llistat-cotxes");
  
        const cotxesNous = cotxes.filter(c => c.nou === true);
  
        if (cotxesNous.length === 0) {
          container.innerHTML = "<p>No hi ha cotxes disponibles.</p>";
          return;
        }
  
        cotxesNous.forEach(cotxe => {
          const card = document.createElement("div");
          card.classList.add("card", "mb-4", "shadow-sm");
  
          card.innerHTML = `
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${cotxe.imatge}" class="img-fluid rounded-start" alt="${cotxe.nom} ${cotxe.model}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${cotxe.nom} ${cotxe.model}</h5>
                  <p class="card-text"><strong>Preu:</strong> <span class="text-success">${cotxe.preu.toLocaleString()} €</span></p>
                  <p class="card-text">${cotxe.descripcio.slice(0, 120)}...</p>
                  <a href="/cotxes/cotxes.html?id=${cotxe.id}" class="btn btn-primary">Veure més</a>
                </div>
              </div>
            </div>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(err => {
        console.error("Error carregant cotxes:", err);
        document.getElementById("llistat-cotxes").innerHTML = "<p>Error carregant les dades.</p>";
      });


  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch("/cotxes/cotxes.json")
      .then(res => res.json())
      .then(cotxes => {
        const container = document.getElementById("llistat-cotxes-2ma");
  
        const cotxesNous = cotxes.filter(c => c.nou === false);
  
        if (cotxesNous.length === 0) {
          container.innerHTML = "<p>No hi ha cotxes disponibles.</p>";
          return;
        }
  
        cotxesNous.forEach(cotxe => {
          const card = document.createElement("div");
          card.classList.add("card", "mb-4", "shadow-sm");
  
          card.innerHTML = `
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${cotxe.imatge}" class="img-fluid rounded-start" alt="${cotxe.nom} ${cotxe.model}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${cotxe.nom} ${cotxe.model}</h5>
                  <p class="card-text"><strong>Preu:</strong> <span class="text-success">${cotxe.preu.toLocaleString()} €</span></p>
                  <p class="card-text">${cotxe.descripcio.slice(0, 120)}...</p>
                  <a href="/cotxes/cotxes.html?id=${cotxe.id}" class="btn btn-primary">Veure més</a>
                </div>
              </div>
            </div>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(err => {
        console.error("Error carregant cotxes:", err);
        document.getElementById("llistat-cotxes-2ma").innerHTML = "<p>Error carregant les dades.</p>";
      });


  });

  
  