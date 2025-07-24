// Initialize Map
let map;
let vehicleMarkers = [];

// Sample Vehicle Data
const vehicles = [
    { id: "V001", lat: 40.7128, lng: -74.0060, driver: "Kannan", speed: "60 km/h", status: "Active" },
    { id: "V002", lat: 34.0522, lng: -118.2437, driver: "Affleck", speed: "50 km/h", status: "On Route" },
    { id: "V003", lat: 51.5074, lng: -0.1278, driver: "Rojo", speed: "45 km/h", status: "Idle" }
];

// Initialize Google Map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 4,
    });

    addVehicleMarkers();
}

// Add Markers for Vehicles (Using AdvancedMarkerElement)
function addVehicleMarkers() {
    vehicleMarkers.forEach(marker => marker.setMap(null)); // Clear existing markers
    vehicleMarkers = [];

    vehicles.forEach(vehicle => {
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: vehicle.lat, lng: vehicle.lng },
            map: map,
            title: vehicle.id,
        });

        // Info Window
        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>Vehicle ID:</strong> ${vehicle.id} <br> 
                      <strong>Driver:</strong> ${vehicle.driver} <br>
                      <strong>Speed:</strong> ${vehicle.speed} <br>
                      <strong>Status:</strong> ${vehicle.status}`
        });

        marker.addEventListener("click", () => {
            infoWindow.open(map, marker);
        });

        vehicleMarkers.push(marker);
    });
}

// Search Vehicle
function searchVehicle() {
    const searchInput = document.getElementById("vehicle-search").value.toUpperCase();
    const vehicle = vehicles.find(v => v.id === searchInput);

    if (vehicle) {
        map.setCenter({ lat: vehicle.lat, lng: vehicle.lng });
        map.setZoom(10);
    } else {
        alert("Vehicle not found!");
    }
}

// Refresh Data Every 10 Seconds (Simulated Live Tracking)
setInterval(() => {
    vehicles.forEach(vehicle => {
        vehicle.lat += (Math.random() - 0.5) * 0.01; // Random small movement
        vehicle.lng += (Math.random() - 0.5) * 0.01;
    });

    addVehicleMarkers();
}, 10000);

// Load Map on Window Load
window.onload = initMap;
