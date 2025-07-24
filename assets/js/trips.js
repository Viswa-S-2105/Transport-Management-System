document.addEventListener("DOMContentLoaded", () => {
    const tripForm = document.getElementById("trip-form");
    const tripTableBody = document.getElementById("trip-table-body");

    let trips = [];

    // Function to Render Trip Table
    function renderTrips() {
        tripTableBody.innerHTML = "";
        trips.forEach((trip, index) => {
            let row = `<tr>
                <td>${trip.id}</td>
                <td>${trip.destination}</td>
                <td>${trip.driver}</td>
                <td>${trip.vehicle}</td>
                <td>${trip.status}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editTrip(${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteTrip(${index})">Delete</button>
                </td>
            </tr>`;
            tripTableBody.innerHTML += row;
        });
    }

    // Function to Add a Trip
    tripForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("trip-id").value;
        const destination = document.getElementById("trip-destination").value;
        const driver = document.getElementById("assigned-driver").value;
        const vehicle = document.getElementById("assigned-vehicle").value;
        const status = document.getElementById("trip-status").value;

        trips.push({ id, destination, driver, vehicle, status });
        renderTrips();

        // Clear form fields
        tripForm.reset();
    });

    // Function to Edit Trip
    window.editTrip = (index) => {
        let trip = trips[index];
        document.getElementById("trip-id").value = trip.id;
        document.getElementById("trip-destination").value = trip.destination;
        document.getElementById("assigned-driver").value = trip.driver;
        document.getElementById("assigned-vehicle").value = trip.vehicle;
        document.getElementById("trip-status").value = trip.status;

        // Remove old entry
        trips.splice(index, 1);
        renderTrips();
    };

    // Function to Delete Trip
    window.deleteTrip = (index) => {
        if (confirm("Are you sure you want to delete this trip?")) {
            trips.splice(index, 1);
            renderTrips();
        }
    };
});
