// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {

    // Récupération du conteneur
    const container = document.getElementById("booking-form");

    // Sécurité : si le conteneur n'existe pas
    if (!container) {
        console.error("❌ Élément #booking-form introuvable");
        return;
    }

    // Fonction pour créer un champ avec label flottant
    function createField(labelText, inputType, min = null, max = null) {
        const wrapper = document.createElement("div");
        wrapper.className = "field-wrapper";

        const input = document.createElement("input");
        input.type = inputType;
        input.className = "booking-input";
        input.required = true;
        input.value = "";

        if (min !== null) input.min = min;
        if (max !== null) input.max = max;

        // Gestion du label flottant pour date / time
        input.addEventListener("change", () => {
            if (input.value !== "") {
                input.classList.add("has-value");
            } else {
                input.classList.remove("has-value");
            }
        });

        const label = document.createElement("label");
        label.textContent = labelText;
        label.className = "floating-label";

        wrapper.appendChild(input);
        wrapper.appendChild(label);

        return wrapper;
    }

    // Ajout des champs
    container.appendChild(createField("Booking date", "date"));
    container.appendChild(createField("Booking time", "time"));
    container.appendChild(createField("Number of people", "number", 1, 10));
});
