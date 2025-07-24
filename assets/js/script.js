// Simulated Data for Dashboard
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("total-vehicles").innerText = "25 Registered";
    document.getElementById("total-drivers").innerText = "18 Active";
    document.getElementById("total-trips").innerText = "120 Completed";
    document.getElementById("total-earnings").innerText = "₹ 1,50,000";

    // Sample Data for Recent Trips Table
    const tripsData = [
        { id: "TRP001", driver: "Kannan", vehicle: "Truck A", destination: "Chennai", status: "Completed" },
        { id: "TRP002", driver: "Affleck", vehicle: "Bus B", destination: "Mumbai", status: "Ongoing" },
        { id: "TRP003", driver: "Rojo", vehicle: "Van C", destination: "Bangalore", status: "Pending" },
    ];

    // Populate Table
    let tableBody = document.getElementById("recent-trips-data");
    tripsData.forEach(trip => {
        let row = `<tr>
            <td>${trip.id}</td>
            <td>${trip.driver}</td>
            <td>${trip.vehicle}</td>
            <td>${trip.destination}</td>
            <td>${trip.status}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
