document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("image");
    const previewDiv = document.getElementById("preview");
  
    imageInput.addEventListener("change", (e) => {
      // Vorherige Vorschau entfernen
      previewDiv.innerHTML = "";
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        
        reader.onload = (evt) => {
          const img = document.createElement("img");
          img.src = evt.target.result;
          img.alt = "Vorschau";
          img.className = "preview-image";
          // Größenanpassung: Maximale Breite 100% des Containers, Höhe automatisch
          img.style.maxWidth = "100%";
          img.style.height = "auto";
          // Optional: zentrierte Darstellung
          img.style.display = "block";
          img.style.margin = "1rem auto";
          previewDiv.appendChild(img);
        };
        
        reader.onerror = (err) => {
          console.error("Fehler beim Laden der Datei:", err);
        };
  
        reader.readAsDataURL(file);
      }
    });
  });
  