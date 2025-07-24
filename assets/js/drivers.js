document.addEventListener("DOMContentLoaded", () => {
    const driverForm = document.getElementById("driver-form");
    const driverTableBody = document.getElementById("driver-table-body");

    let drivers = [];

    // Function to Render Driver Table
    function renderDrivers() {
        driverTableBody.innerHTML = "";
        drivers.forEach((driver, index) => {
            let row = `<tr>
                <td>${driver.name}</td>
                <td>${driver.license}</td>
                <td>${driver.contact}</td>
                <td>${driver.vehicle}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editDriver(${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteDriver(${index})">Delete</button>
                </td>
            </tr>`;
            driverTableBody.innerHTML += row;
        });
    }

    // Function to Add a Driver
    driverForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("driver-name").value;
        const license = document.getElementById("license-number").value;
        const contact = document.getElementById("contact-number").value;
        const vehicle = document.getElementById("assigned-vehicle").value;

        drivers.push({ name, license, contact, vehicle });
        renderDrivers();

        // Clear form fields
        driverForm.reset();
    });

    // Function to Edit Driver
    window.editDriver = (index) => {
        let driver = drivers[index];
        document.getElementById("driver-name").value = driver.name;
        document.getElementById("license-number").value = driver.license;
        document.getElementById("contact-number").value = driver.contact;
        document.getElementById("assigned-vehicle").value = driver.vehicle;

        // Remove old entry
        drivers.splice(index, 1);
        renderDrivers();
    };

    // Function to Delete Driver
    window.deleteDriver = (index) => {
        if (confirm("Are you sure you want to delete this driver?")) {
            drivers.splice(index, 1);
            renderDrivers();
        }
    };
});
