document.addEventListener("DOMContentLoaded", () => {
    const vehicleForm = document.getElementById("vehicle-form");
    const vehicleTableBody = document.getElementById("vehicle-table-body");

    let vehicles = [];

    // Function to Render Vehicle Table
    function renderVehicles() {
        vehicleTableBody.innerHTML = "";
        vehicles.forEach((vehicle, index) => {
            let row = `<tr>
                <td>${vehicle.name}</td>
                <td>${vehicle.type}</td>
                <td>${vehicle.number}</td>
                <td>${vehicle.capacity}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editVehicle(${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteVehicle(${index})">Delete</button>
                </td>
            </tr>`;
            vehicleTableBody.innerHTML += row;
        });
    }

    // Function to Add a Vehicle
    vehicleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("vehicle-name").value;
        const type = document.getElementById("vehicle-type").value;
        const number = document.getElementById("vehicle-number").value;
        const capacity = document.getElementById("capacity").value;

        vehicles.push({ name, type, number, capacity });
        renderVehicles();

        // Clear form fields
        vehicleForm.reset();
    });

    // Function to Edit Vehicle
    window.editVehicle = (index) => {
        let vehicle = vehicles[index];
        document.getElementById("vehicle-name").value = vehicle.name;
        document.getElementById("vehicle-type").value = vehicle.type;
        document.getElementById("vehicle-number").value = vehicle.number;
        document.getElementById("capacity").value = vehicle.capacity;

        // Remove old entry
        vehicles.splice(index, 1);
        renderVehicles();
    };

    // Function to Delete Vehicle
    window.deleteVehicle = (index) => {
        if (confirm("Are you sure you want to delete this vehicle?")) {
            vehicles.splice(index, 1);
            renderVehicles();
        }
    };
});
