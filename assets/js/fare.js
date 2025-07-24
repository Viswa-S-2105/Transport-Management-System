document.addEventListener("DOMContentLoaded", () => {
    const fareForm = document.getElementById("fare-form");
    const fareTableBody = document.getElementById("fare-table-body");
    const distanceInput = document.getElementById("distance");
    const vehicleTypeInput = document.getElementById("vehicle-type");
    const fareAmountInput = document.getElementById("fare-amount");

    let fares = [];

    // Fare calculation function
    function calculateFare() {
        const distance = parseFloat(distanceInput.value);
        const vehicleType = vehicleTypeInput.value;
        let ratePerKm = 0;

        if (vehicleType === "Truck") {
            ratePerKm = 10;
        } else if (vehicleType === "Van") {
            ratePerKm = 7;
        } else if (vehicleType === "Bus") {
            ratePerKm = 5;
        }

        const fare = distance * ratePerKm;
        fareAmountInput.value = fare.toFixed(2);
    }

    // Update fare amount on input change
    distanceInput.addEventListener("input", calculateFare);
    vehicleTypeInput.addEventListener("change", calculateFare);

    // Function to Render Fare Table
    function renderFares() {
        fareTableBody.innerHTML = "";
        fares.forEach((fare, index) => {
            let row = `<tr>
                <td>${fare.tripId}</td>
                <td>${fare.distance}</td>
                <td>${fare.vehicleType}</td>
                <td>${fare.amount}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editFare(${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteFare(${index})">Delete</button>
                </td>
            </tr>`;
            fareTableBody.innerHTML += row;
        });
    }

    // Function to Add a Fare
    fareForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const tripId = document.getElementById("trip-id").value;
        const distance = parseFloat(distanceInput.value);
        const vehicleType = vehicleTypeInput.value;
        const amount = parseFloat(fareAmountInput.value);

        fares.push({ tripId, distance, vehicleType, amount });
        renderFares();

        // Clear form fields
        fareForm.reset();
    });

    // Function to Edit Fare
    window.editFare = (index) => {
        let fare = fares[index];
        document.getElementById("trip-id").value = fare.tripId;
        distanceInput.value = fare.distance;
        vehicleTypeInput.value = fare.vehicleType;
        fareAmountInput.value = fare.amount;

        // Remove old entry
        fares.splice(index, 1);
        renderFares();
    };

    // Function to Delete Fare
    window.deleteFare = (index) => {
        if (confirm("Are you sure you want to delete this fare?")) {
            fares.splice(index, 1);
            renderFares();
        }
    };
});
