// app.js

document.addEventListener('DOMContentLoaded', function() {
    // Simulate updating sensor data
    setInterval(updateSensorData, 5000); // Update every 5 seconds

    // Handle appliance controls
    document.getElementById('toggleLight').addEventListener('click', function() {
        alert('Light toggled!');
        // Here you'd send a command to actually toggle the light
    });

    document.getElementById('toggleHeater').addEventListener('click', function() {
        alert('Heater toggled!');
        // Here you'd send a command to actually toggle the heater
    });
});

function updateSensorData() {
    // This is where you'd fetch real sensor data, but we'll simulate it
    document.getElementById('wasteWaterLevel').innerText = `${Math.floor(Math.random() * 100)}%`;
    document.getElementById('waterPressure').innerText = `${Math.floor(Math.random() * 120)} PSI`;
    document.getElementById('gasLevel').innerText = `${Math.floor(Math.random() * 100)}%`;
    document.getElementById('airQuality').innerText = Math.random() > 0.5 ? 'Good' : 'Poor';
}
