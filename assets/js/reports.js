document.addEventListener("DOMContentLoaded", () => {
    // Trip Analytics Chart
    const tripCtx = document.getElementById("tripChart").getContext("2d");
    new Chart(tripCtx, {
        type: "pie",
        data: {
            labels: ["Completed", "Ongoing", "Cancelled"],
            datasets: [{
                data: [60, 25, 15], // Example data
                backgroundColor: ["#2ecc71", "#f1c40f", "#e74c3c"]
            }]
        }
    });

    // Fare Collection Chart
    const fareCtx = document.getElementById("fareChart").getContext("2d");
    new Chart(fareCtx, {
        type: "bar",
        data: {
            labels: ["Truck", "Van", "Bus"],
            datasets: [{
                label: "Fare Collected",
                data: [50000, 35000, 20000], // Example data
                backgroundColor: ["#3498db", "#9b59b6", "#e67e22"]
            }]
        }
    });

    // Driver Performance Chart
    const driverCtx = document.getElementById("driverChart").getContext("2d");
    new Chart(driverCtx, {
        type: "line",
        data: {
            labels: ["Driver 1", "Driver 2", "Driver 3", "Driver 4"],
            datasets: [{
                label: "Total Trips",
                data: [45, 30, 50, 20], // Example data
                borderColor: "#1abc9c",
                fill: false
            }]
        }
    });
});
