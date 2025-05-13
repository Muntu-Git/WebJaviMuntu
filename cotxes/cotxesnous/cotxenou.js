// Llegeix l'id de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Carrega els cotxes des del JSON
fetch("/cotxes/cotxesnous/data/cotxes.json")
  .then(res => res.json())
  .then(cotxes => {
    const cotxe = cotxes.find(c => c.id === id);
    const container = document.getElementById("car-details");

    if (cotxe) {
      container.innerHTML = `
        <div class="car-container">
          <div class="car-image-box">
            <img src="${cotxe.imatge}" alt="${cotxe.nom} ${cotxe.model}" class="car-image" />
          </div>
          <div class="car-info-box">
            <div class="car-info-card">
              <h2 class="car-title">${cotxe.nom}</h2>
              <h3 class="car-model">${cotxe.model}</h3>
              <p class="car-preu">${cotxe.preu.toLocaleString()} €</p>
              <p class="car-description">${cotxe.descripcio}</p>
              <a href="/cotxes/cotxes.html" class="btn btn-secondary mt-3">Tornar al catàleg</a>
            </div>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = "<p>Cotxe no trobat.</p>";
    }
  })
  .catch(err => {
    console.error("Error carregant JSON:", err);
    document.getElementById("car-details").innerHTML = "<p>Error carregant les dades del cotxe.</p>";
  });
