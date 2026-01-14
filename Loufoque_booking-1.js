// Récupération du conteneur
const container = document.getElementById("booking-form");

// Fonction pour créer un champ avec label flottant
function createField(labelText, inputType, min = null, max = null) {
    const wrapper = document.createElement("div");
    wrapper.className = "field-wrapper";

    const input = document.createElement("input");
    input.type = inputType;
    input.className = "booking-input";
    input.placeholder = " "; // indispensable pour le label flottant
    input.required = true;

    if (min !== null) input.min = min;
    if (max !== null) input.max = max;

    const label = document.createElement("label");
    label.textContent = labelText;
    label.className = "floating-label";

    wrapper.appendChild(input);
    wrapper.appendChild(label);

    return wrapper;
}

// Ajout des champs au HTML
container.appendChild(createField("Booking date", "date"));
container.appendChild(createField("Booking time", "time"));
container.appendChild(createField("Number of people", "number", 1, 10));
