// Llegeix l'id de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Carrega els cotxes des del JSON
fetch("./cotxes.json")
  .then(res => res.json())
  .then(cotxes => {
    // Filtrar els cotxes que són nous (nou = true)
    const cotxe = cotxes
      .find(c => c.id === id);      // Busca el cotxe per id

    const container = document.getElementById("car-details");

    let cotxeNou = "";


    if (cotxe) {
      if(cotxe.nou){
        cotxeNou = "Nou";
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
              <a href="./cotxesnous/cotxes.html" class="btn btn-secondary mt-3">Tornar al catàleg</a>
              <h3 class="my-text-image">${cotxeNou}</h3>
            </div>
          </div>
        </div>
      `;
        
      } else{
        cotxeNou = "2a ma"
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
              <a href="./cotxes2ma/cotxes.html" class="btn btn-secondary mt-3">Tornar al catàleg</a>
              <h3 class="my-text-image">${cotxeNou}</h3>
            </div>
          </div>
        </div>
      `;
      }
      
    } else {
      console.log(cotxe);
    container.innerHTML = "<p>Cotxe no trobat o no és un cotxe de segona mà.</p>";
    }
    
  })
  .catch(err => {
    console.error("Error carregant JSON:", err);
    document.getElementById("car-details").innerHTML = err;
  });