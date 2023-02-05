// Variables for cost per minute and base price
const COST_PER_MINUTE = 0.20;
const BASE_PRICE = 1;

// Variables to show in HTML for pricing info 
const costPerMinute = document.getElementById('cost-per-minute');
costPerMinute.textContent = COST_PER_MINUTE;
const costBasePrice = document.getElementById('cost-base-price');
costBasePrice.textContent = BASE_PRICE;

// Function to calculate the full Price
function calcPrice(durationInMinutes) {
    return durationInMinutes * COST_PER_MINUTE + BASE_PRICE;
}

// get reference rental-form & cost-display
const form = document.getElementById('rental-form');
const costDisplay = document.getElementById('cost-display');

// prevents input to get auto submited
form.addEventListener('submit', event => {
    event.preventDefault();
    const duration = document.getElementById('duration').value;
    // Disclaimer that every number <1 is not allowed
    if (duration < 1) {
        alert("Zeitreisen(negative Zahlen) sind nicht erlaubt. Bitte geben Sie eine positive Zahl ein.");
    } else {
        // calculate price and send to HTML
        const cost = calcPrice(duration);
        costDisplay.innerHTML = `Gesamtkosten: ${cost.toFixed(2)}€`;

        // Variables for Fahrtenhistorie
        const date = new Date();
        let pastRides = [];

        pastRides.push({duration: duration, cost: cost, date: date});

        // Create a new table row for every new ride
        const rideHistoryTable = document.getElementById('ride-history-table');
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        dateCell.textContent = date.toLocaleDateString();
        const durationCell = document.createElement('td');
        durationCell.textContent = duration;
        const costCell = document.createElement('td');
        costCell.textContent = `${cost.toFixed(2)}€`;

        // Append the cells to the row
        row.appendChild(dateCell);
        row.appendChild(durationCell);
        row.appendChild(costCell);

        // Append the row to the table
        rideHistoryTable.appendChild(row);
    }
});
