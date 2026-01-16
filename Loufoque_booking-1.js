function createField(labelText, inputType, min = null, max = null) {
    const wrapper = document.createElement("div");
    wrapper.className = "field-wrapper";

    const input = document.createElement("input");
    input.type = inputType;
    input.className = "booking-input";
    input.placeholder = " ";
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

/* =========================
   PAGE 1 — Booking details
========================= */
const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
    bookingForm.appendChild(createField("Booking date", "date"));
    bookingForm.appendChild(createField("Booking time", "time"));
    bookingForm.appendChild(createField("Number of people", "number", 1, 10));
}

/* =========================
   PAGE 2 — Contact details
========================= */
const bookingCoor = document.getElementById("booking-coor");

if (bookingCoor) {
    bookingCoor.appendChild(createField("Name", "text"));
    bookingCoor.appendChild(createField("Email", "email"));
    bookingCoor.appendChild(createField("Phone number", "phone"));
}
