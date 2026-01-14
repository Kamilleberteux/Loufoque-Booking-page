const container = document.getElementById("booking-form");

//Booking date
const dateField = document.createElement("input");
dateField.type = "date";
dateField.className = "booking-info";

//Booking time
const timeField = document.createElement("input");
timeField.type = "time";
timeField.className = "booking-info";

//Number of people
const peopleField = document.createElement("input");
peopleField.type = "number";
peopleField.min = 1;
peopleField.max = 10;
peopleField.placeholder = "Number of people";
peopleField.className = "booking info";

//Ajout au HTML
container.appendChild(dateField);
container.appendChild(timeField);
container.appendChild(peopleField);

//Label
function createField(labelText, inputType) {
  const wrapper = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = labelText;

  const input = document.createElement("input");
  input.type = inputType;
  input.className = "booking-info";

  wrapper.appendChild(label);
  wrapper.appendChild(input);

  return wrapper;
}

container.appendChild(createField("Booking date", "date"));
container.appendChild(createField("Booking time", "time"));
container.appendChild(createField("Number of people", "number"));

