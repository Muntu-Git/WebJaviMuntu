(function () {
    const input = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");
    let cotxes = [];
  
    if (!input || !suggestions) return; // seguridad por si no se ha cargado bien el navbar
  
    // Carregar el JSON de cotxes
    fetch("/cotxes/cotxes.json")
      .then(res => res.json())
      .then(data => cotxes = data)
      .catch(err => console.error("Error carregant cotxes:", err));
  
    // Filtrar suggeriments mentre s'escriu
    input.addEventListener("input", function () {
      const text = input.value.toLowerCase();
      suggestions.innerHTML = "";
  
      if (text.length === 0) return;
  
      const resultats = cotxes.filter(cotxe =>
        cotxe.nom.toLowerCase().includes(text) ||
        cotxe.model.toLowerCase().includes(text)
      );
  
      resultats.forEach(cotxe => {
        const item = document.createElement("a");
        item.href = `/cotxes/cotxes.html?id=${cotxe.id}`;
        item.classList.add("list-group-item", "list-group-item-action", "d-flex", "align-items-center");
  
        item.innerHTML = `
          <img src="${cotxe.imatge}" alt="${cotxe.nom} ${cotxe.model}" style="width: 60px; height: 40px; object-fit: cover; margin-right: 10px; border-radius: 4px;">
          <div>
            <strong>${cotxe.nom} ${cotxe.model}</strong><br>
            <small>${cotxe.preu.toLocaleString("ca-ES")} €</small>
          </div>
        `;
  
        suggestions.appendChild(item);
      });
    });
  
    // Amagar suggeriments si es fa clic fora
    document.addEventListener("click", function (e) {
      if (!input.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.innerHTML = "";
      }
    });
  })();